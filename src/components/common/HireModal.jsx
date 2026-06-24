import React from 'react';

/**
 * HireModal Component
 * Modal form for contacting the developer
 * Accepts name, email, and project details
 */
const HireModal = ({
  isOpen,
  onClose,
  onSubmit,
}) => {
  if (!isOpen) return null;

  const handleSubmit = (e) => {
    onSubmit(e);
  };

  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-md w-full p-6 md:p-8 shadow-2xl border border-slate-100 relative animate-in fade-in zoom-in-95 duration-200">
        <h3 className="font-display font-extrabold text-slate-900 text-2xl mb-2 text-left">
          Let's Work Together!
        </h3>
        <p className="font-sans text-slate-500 text-sm mb-6 text-left">
          Fill out the form below to share details about your project or role, and I will get back to
          you within 24 hours.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Your Name
            </label>
            <input
              required
              type="text"
              placeholder="John Doe"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#2563eb] font-sans text-sm"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Email Address
            </label>
            <input
              required
              type="email"
              placeholder="john@example.com"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#2563eb] font-sans text-sm"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Project Details
            </label>
            <textarea
              required
              rows="3"
              placeholder="Tell me about what you are looking to build..."
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#2563eb] font-sans text-sm resize-none"
            />
          </div>
          <div className="flex space-x-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-3 rounded-xl border border-slate-200 text-slate-700 font-sans text-sm font-semibold hover:bg-slate-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-3 rounded-xl bg-[#090e1a] text-white font-sans text-sm font-semibold hover:bg-[#2563eb] transition-all hover:shadow-lg active:scale-98"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HireModal;
