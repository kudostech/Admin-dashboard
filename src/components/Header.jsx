export default function Header({ toggleSidebar }) {
  return (
    <header className="w-full bg-white shadow p-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <button
          onClick={toggleSidebar}
          className="md:hidden text-gray-600 focus:outline-none"
          aria-label="Toggle menu"
        >
          ☰
        </button>
        <h2 className="text-xl font-semibold">Dashboard</h2>
      </div>

      <div className="flex items-center gap-4">
        <span className="text-gray-600 text-sm sm:text-base">Hello, Admin</span>
        <img
          src="https://i.pravatar.cc/40"
          alt="avatar"
          className="w-10 h-10 rounded-full"
        />
      </div>
    </header>
  );
}
