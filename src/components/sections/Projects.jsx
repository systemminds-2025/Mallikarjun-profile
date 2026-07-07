import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import qwikhireatsImg from '../../assets/projects/qwikhireats.png';
import interviewmitraImg from '../../assets/projects/interviewmitra.png';
import kareergrowthImg from '../../assets/projects/kareergrowth.png';
import validprofileImg from '../../assets/projects/validprofile.png';

const INITIAL_PROJECTS = [
  { id: 'qwikhireats', title: 'QwikHire ATS', image: qwikhireatsImg, url: 'https://qwikhire.ai' },
  { id: 'interviewmitra', title: 'InterviewMitra', image: interviewmitraImg, url: 'https://interviewmitra.in' },
  { id: 'kareergrowth', title: 'KareerGrowth', image: kareergrowthImg, url: 'https://kareergrowth.com' },
  { id: 'validprofile', title: 'ValidProfile', image: validprofileImg, url: 'https://validprofile.com' }
];

const generateGrid = (isMobile) => {
  const radius = isMobile ? 500 : 1200;
  const anglePerCol = isMobile ? 35 : 18;
  const numCols = isMobile ? 7 : 13;
  const numRows = 5;
  const rowHeight = isMobile ? 180 : 240;
  
  const displayProjects = [];
  while (displayProjects.length < numRows * numCols) {
    displayProjects.push(...INITIAL_PROJECTS);
  }

  const gridLayout = [];
  let projectIndex = 0;

  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
      const thetaDeg = (col - Math.floor(numCols / 2)) * anglePerCol; 
      const thetaRad = thetaDeg * (Math.PI / 180);
      
      const xTrans = Math.sin(thetaRad) * radius;
      const zTrans = radius - Math.cos(thetaRad) * radius; 
      const initialYTrans = (row - Math.floor(numRows / 2)) * rowHeight;
      const yRot = -thetaDeg; 

      gridLayout.push({
        id: `cell-${row}-${col}-${projectIndex}`,
        xTrans,
        initialYTrans,
        zTrans,
        yRot,
        project: displayProjects[projectIndex++]
      });
    }
  }
  return { gridLayout, numRows, rowHeight };
};

const desktopConfig = generateGrid(false);
const mobileConfig = generateGrid(true);

const ProjectCard = ({ item, globalY, numRows, rowHeight }) => {
  const { project, xTrans, initialYTrans, zTrans, yRot } = item;

  // Infinite Vertical Wrapping Math
  const totalHeight = numRows * rowHeight; 
  const halfHeight = totalHeight / 2; 

  // Dynamically wrap the Y position so rows visually loop forever
  const y = useTransform(globalY, (yVal) => {
    let currentY = initialYTrans + yVal;
    return ((currentY + halfHeight) % totalHeight + totalHeight) % totalHeight - halfHeight;
  });

  return (
    <div 
      className="absolute top-1/2 left-1/2"
      style={{
        transform: 'translate(-50%, -50%)',
        transformStyle: 'preserve-3d'
      }}
    >
      <motion.div
        style={{ 
          x: xTrans, 
          y, 
          z: zTrans, 
          rotateY: yRot,
          backfaceVisibility: 'hidden', 
          WebkitBackfaceVisibility: 'hidden'
        }}
        className="flex items-center justify-center"
      >
        <a
          href={project.url}
          target="_blank"
          rel="noreferrer"
          // Significantly reduced image widths
          className="relative block w-[160px] md:w-[220px] aspect-[4/3] overflow-hidden rounded-md group cursor-pointer transition-all duration-300 ring-1 ring-slate-200 hover:ring-slate-300 hover:shadow-[0_10px_40px_rgba(0,0,128,0.15)]"
        >
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover opacity-40 group-hover:opacity-100 transition-opacity duration-700"
          />
          {/* Overlay with title on hover */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-white/70 backdrop-blur-sm">
            <span className="text-[#000080] text-base md:text-xl font-display font-bold tracking-wide text-center px-4 drop-shadow-sm">
              {project.title}
            </span>
          </div>
        </a>
      </motion.div>
    </div>
  );
};

const Projects = () => {
  const containerRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const { gridLayout, numRows, rowHeight } = isMobile ? mobileConfig : desktopConfig;

  const springConfig = { damping: 50, stiffness: 100, mass: 1 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const handlePointerMove = (clientX, clientY) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 2 - 1;
    const y = ((clientY - rect.top) / rect.height) * 2 - 1;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseMove = (e) => handlePointerMove(e.clientX, e.clientY);
  const handleTouchMove = (e) => handlePointerMove(e.touches[0].clientX, e.touches[0].clientY);
  
  const handleReset = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Spin the cylinder slightly left/right
  const spinY = useTransform(smoothX, [-1, 1], [-25, 25]);
  // Move all items up/down (triggers the infinite wrapping in the child)
  const globalY = useTransform(smoothY, [-1, 1], [400, -400]);

  return (
    <section 
      id="projects" 
      ref={containerRef}
      className="relative w-full h-[115svh] bg-gradient-to-b from-white to-[#000080] overflow-hidden flex items-center justify-center rounded-b-[3.5rem] lg:rounded-b-[5.5rem] z-10"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleReset}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleReset}
      onTouchCancel={handleReset}
      // Increased perspective to keep the depth smooth with the new larger radius
      style={{ perspective: '2500px' }}
    >
      {/* Center Text Floating in the middle of the bowl */}
      <div 
        className="absolute top-1/2 left-1/2 z-50 pointer-events-none"
        style={{ transform: 'translate(-50%, -50%) translateZ(400px)' }} 
      >
        <h2 className="text-white font-display font-black text-3xl md:text-4xl lg:text-5xl tracking-tight drop-shadow-md whitespace-nowrap text-center uppercase">
          Featured Projects
        </h2>
      </div>

      {/* The 3D Scene Wrapper */}
      <motion.div 
        className="relative w-full h-full flex items-center justify-center"
        style={{ 
          // Center is natively at Z=0, so no need to push back. 
          rotateY: spinY,
          transformStyle: 'preserve-3d'
        }}
      >
        {gridLayout.map((item) => (
          <ProjectCard key={item.id} item={item} globalY={globalY} numRows={numRows} rowHeight={rowHeight} />
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
