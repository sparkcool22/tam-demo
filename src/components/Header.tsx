import { useState } from 'react';
import { Clock, User, ChevronDown, LogOut, Home, Users, Settings, Bell } from 'lucide-react';

export default function Header() {
  const [navOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Top bar */}
      <div className="bg-gradient-to-r from-teal-800 to-teal-700 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-9 items-center justify-between text-xs">
            <span className="hidden sm:flex items-center gap-2 opacity-90">
              <Clock className="h-3.5 w-3.5" />
              TIME ATTENDANCE MANAGEMENT
            </span>
            <span className="flex items-center gap-3 opacity-90">
              <span className="hidden md:inline">Network Broadcasting and Content Production</span>
              <span className="opacity-50">|</span>
              <span>contact 9131, 9134</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo + Title */}
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-teal-700 to-teal-900 shadow-lg">
              <Clock className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-slate-800 leading-tight">
                Time Attendance
              </h1>
              <p className="text-sm text-teal-700 font-medium">
                Final Control Operation (FCO)
              </p>
            </div>
          </div>

          {/* User info */}
          <div className="flex items-center gap-4">
            <button className="hidden sm:flex h-10 w-10 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100 hover:text-slate-700 transition-colors relative">
              <Bell className="h-5 w-5" />
              <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-amber-500 animate-pulse-ring" />
            </button>

            <div className="hidden md:flex items-center gap-3 border-l border-slate-200 pl-4">
              <div className="text-right">
                <p className="text-sm font-semibold text-slate-700">คุณ สมพงศ์ จันเรียน</p>
                <p className="text-xs text-slate-400">User</p>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-teal-600 to-teal-800 text-white text-sm font-bold shadow-md">
                สจ
              </div>
            </div>

            <button className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-rose-50 hover:text-rose-600 transition-colors">
              <LogOut className="h-4 w-4" />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="border-t border-slate-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <NavItem icon={<Home className="h-4 w-4" />} label="Home" />
              <NavItem icon={<Users className="h-4 w-4" />} label="User" active />
              <NavItem icon={<Settings className="h-4 w-4" />} label="Admin" />
            </div>
            <div className="hidden md:flex items-center gap-2 py-2.5 text-xs text-slate-400">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>For User</span>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

function NavItem({
  icon,
  label,
  active = false,
}: {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}) {
  return (
    <button
      className={`flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
        active
          ? 'border-teal-700 text-teal-700'
          : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
      }`}
    >
      {icon}
      {label}
    </button>
  );
}
