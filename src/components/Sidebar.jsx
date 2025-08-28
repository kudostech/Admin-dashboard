export default function Sidebar({ isOpen, onClose }) {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    const headerOffset = 80; // height of fixed header
    if (el) window.scrollTo({ top: el.offsetTop - headerOffset, behavior: "smooth" });
    onClose(); // close sidebar on mobile
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-30 md:hidden transition-opacity duration-200 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
        onClick={onClose}
      />

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-40 h-full transform transition-transform duration-200
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:relative md:translate-x-0 bg-gray-900 text-white p-4
          w-3/4 sm:w-64`}
      >
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-xl sm:text-2xl font-bold">Admin</h1>
          <button className="md:hidden text-gray-300 text-lg" onClick={onClose}>✕</button>
        </div>

        <nav className="flex flex-col gap-2 sm:gap-3">
          <button
            className="hover:bg-gray-700 p-2 rounded text-sm sm:text-base text-left"
            onClick={() => scrollToSection("dashboard-cards")}
          >
            Dashboard
          </button>

          <button
            className="hover:bg-gray-700 p-2 rounded text-sm sm:text-base text-left"
            onClick={() => scrollToSection("users-table")}
          >
            Users
          </button>

          <button
            className="hover:bg-gray-700 p-2 rounded text-sm sm:text-base text-left"
            onClick={() => scrollToSection("chart-section")}
          >
            Reports
          </button>

          <button
            className="hover:bg-gray-700 p-2 rounded text-sm sm:text-base text-left"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Settings
          </button>
        </nav>
      </aside>
    </>
  );
}
