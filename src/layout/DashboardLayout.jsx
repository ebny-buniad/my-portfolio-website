// DashboardLayout.jsx
import { Link, Outlet } from "react-router";
import { useState } from "react";
import { FaBars, FaTimes, FaHome, FaProjectDiagram, FaCog } from "react-icons/fa";

export default function DashboardLayout() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = (
    <>
      <li>
        <Link to="/dashboard" className="flex items-center gap-2">
          <FaHome /> Dashboard
        </Link>
      </li>
      <li>
        <Link to="/my-dashboard/add-projects" className="flex items-center gap-2">
          <FaProjectDiagram /> Projects
        </Link>
      </li>
      <li>
        <Link to="/dashboard/settings" className="flex items-center gap-2">
          <FaCog /> Settings
        </Link>
      </li>
    </>
  );

  return (
    <div className="flex min-h-screen">
      {/* Sidebar for large devices */}
      <div className="hidden lg:block w-64 bg-base-200 shadow-md">
        <div className="p-4 text-lg font-bold">Dashboard</div>
        <ul className="menu p-4">{navLinks}</ul>
      </div>

      {/* Collapsible Sidebar for small/medium devices */}
      <div className="lg:hidden">
        <button
          className="p-4 text-xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
        {isOpen && (
          <div className="fixed top-0 left-0 w-64 h-full bg-base-200 shadow-lg z-50 p-4">
            <div className="flex justify-between items-center mb-4">
              <span className="font-bold text-lg">Dashboard</span>
              <button onClick={() => setIsOpen(false)}><FaTimes /></button>
            </div>
            <ul className="menu">{navLinks}</ul>
          </div>
        )}
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-4 bg-base-100">
        <Outlet />
      </div>
    </div>
  );
}
