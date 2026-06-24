import { useState } from 'react';

/**
 * Custom hook for managing navigation state
 * Handles active tab, mobile menu, hire modal, and success toast
 */
export const useNavigation = () => {
  const [activeTab, setActiveTab] = useState('Home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showHireModal, setShowHireModal] = useState(false);
  const [showSuccessToast, setShowSuccessToast] = useState(false);

  const handleHireMe = (e) => {
    e.preventDefault();
    setShowHireModal(true);
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setShowHireModal(false);
    setShowSuccessToast(true);
    setTimeout(() => setShowSuccessToast(false), 4000);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return {
    activeTab,
    setActiveTab,
    mobileMenuOpen,
    setMobileMenuOpen,
    closeMobileMenu,
    showHireModal,
    setShowHireModal,
    showSuccessToast,
    setShowSuccessToast,
    handleHireMe,
    handleContactSubmit,
  };
};
