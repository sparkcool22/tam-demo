import { Clock, Phone, Mail, Building2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 py-10 md:grid-cols-3">
          {/* Brand */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-teal-700 to-teal-900 shadow-lg">
              <Clock className="h-6 w-6 text-white" />
            </div>
            <h3 className="mt-3 text-sm font-bold text-slate-800">
              TIME ATTENDANCE MANAGEMENT
            </h3>
            <p className="mt-1 text-xs text-slate-400">
              O&amp;M CATV (TVS)
            </p>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center gap-2 text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-teal-700" />
              <span>contact 9131, 9134</span>
            </div>
            <div className="flex items-center gap-2">
              <Building2 className="h-4 w-4 text-teal-700" />
              <span>TVS Engineering</span>
            </div>
          </div>

          {/* Copyright */}
          <div className="flex flex-col items-center justify-center md:items-end">
            <p className="text-xs text-slate-400">
              CopyRight © {new Date().getFullYear()} tvs-engineering
            </p>
            <p className="mt-1 text-xs text-slate-300">
              All rights reserved.
            </p>
          </div>
        </div>

        <div className="border-t border-slate-100 py-4 text-center">
          <p className="text-xs text-slate-400">
            Time Attendance Management System — Final Control Operation
          </p>
        </div>
      </div>
    </footer>
  );
}
