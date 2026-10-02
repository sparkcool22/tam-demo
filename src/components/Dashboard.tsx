import FeatureCard from './FeatureCard';
import {
  CalendarClock,
  CalendarRange,
  Clock4,
  RefreshCw,
  LogIn,
  LogOut,
  Coffee,
  CalendarDays,
  Timer,
  TrendingUp,
  TrendingDown,
  Minus,
} from 'lucide-react';

const mockData = {
  name: 'สมพงศ์ จันเรียน',
  position: 'เจ้าหน้าที่ FCO',
  department: 'Network Broadcasting and Content Production',
  employeeId: '9001901',
  today: {
    checkIn: '08:02',
    checkOut: '--:--',
    status: 'กำลังทำงาน',
    shift: 'กะเช้า (08:00 - 17:00)',
    otHours: 0,
  },
  week: {
    workedHours: 40,
    otHours: 6.5,
    lateCount: 1,
    absentCount: 0,
  },
  month: {
    workedDays: 18,
    otHours: 22,
    leaveDays: 1,
    leaveRemaining: 9,
  },
  recentLogs: [
    { date: '11 ก.ย. 2569', checkIn: '08:02', checkOut: '17:05', ot: 0, status: 'ปกติ' },
    { date: '10 ก.ย. 2569', checkIn: '08:15', checkOut: '18:30', ot: 1.5, status: 'สาย' },
    { date: '09 ก.ย. 2569', checkIn: '07:55', checkOut: '20:00', ot: 3.0, status: 'ปกติ' },
    { date: '08 ก.ย. 2569', checkIn: '08:00', checkOut: '17:00', ot: 0, status: 'ปกติ' },
    { date: '07 ก.ย. 2569', checkIn: '08:05', checkOut: '19:15', ot: 2.0, status: 'ปกติ' },
  ],
};

export default function Dashboard() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Personal welcome banner */}
      <div className="animate-fade-in-up mb-8 overflow-hidden rounded-2xl bg-gradient-to-br from-teal-800 via-teal-700 to-teal-900 shadow-xl">
        <div className="relative px-6 py-8 sm:px-8 sm:py-10">
          <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-white/5 blur-2xl" />
          <div className="absolute right-20 bottom-0 h-32 w-32 rounded-full bg-amber-400/10 blur-xl" />

          <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="mb-1 text-sm font-medium text-teal-200">สวัสดีตอนเช้า</p>
              <h2 className="text-2xl font-bold text-white sm:text-3xl">{mockData.name}</h2>
              <p className="mt-1 text-sm text-teal-100/80">
                {mockData.position} • {mockData.department}
              </p>
              <p className="mt-0.5 text-xs text-teal-200/60">รหัสพนักงาน: {mockData.employeeId}</p>
            </div>

            {/* Today status card */}
            <div className="rounded-xl bg-white/10 p-4 backdrop-blur-sm ring-1 ring-white/10 sm:min-w-[280px]">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-xs font-medium text-teal-200">สถานะวันนี้</span>
                <span className="flex items-center gap-1.5 rounded-full bg-emerald-500/20 px-2.5 py-0.5 text-xs font-semibold text-emerald-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  {mockData.today.status}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/20">
                    <LogIn className="h-4 w-4 text-emerald-300" />
                  </div>
                  <div>
                    <p className="text-[10px] text-teal-200">เข้างาน</p>
                    <p className="text-sm font-bold text-white">{mockData.today.checkIn}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-rose-500/20">
                    <LogOut className="h-4 w-4 text-rose-300" />
                  </div>
                  <div>
                    <p className="text-[10px] text-teal-200">ออกงาน</p>
                    <p className="text-sm font-bold text-white">{mockData.today.checkOut}</p>
                  </div>
                </div>
              </div>
              <div className="mt-3 flex items-center gap-2 border-t border-white/10 pt-3">
                <Coffee className="h-3.5 w-3.5 text-amber-300" />
                <p className="text-xs text-teal-100/80">{mockData.today.shift}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Summary cards — this week & this month */}
      <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <SummaryCard
          title="ชั่วโมงสัปดาห์"
          value={`${mockData.week.workedHours} ชม.`}
          subtitle={`OT ${mockData.week.otHours} ชม.`}
          icon={<Timer className="h-5 w-5 text-white" />}
          iconBg="bg-gradient-to-br from-teal-500 to-teal-700"
          trend="up"
          trendValue="+2 ชม. จากสัปดาห์ก่อน"
          delay="delay-100"
        />
        <SummaryCard
          title="วันทำงานเดือนนี้"
          value={`${mockData.month.workedDays} วัน`}
          subtitle={`OT ${mockData.month.otHours} ชม.`}
          icon={<CalendarDays className="h-5 w-5 text-white" />}
          iconBg="bg-gradient-to-br from-sky-500 to-sky-700"
          trend="up"
          trendValue="+1 วันจากเดือนก่อน"
          delay="delay-200"
        />
        <SummaryCard
          title="มาสายเดือนนี้"
          value={`${mockData.week.lateCount} ครั้ง`}
          subtitle={`ขาด ${mockData.week.absentCount} วัน`}
          icon={<TrendingDown className="h-5 w-5 text-white" />}
          iconBg="bg-gradient-to-br from-amber-500 to-orange-600"
          trend="down"
          trendValue="-2 ครั้งจากเดือนก่อน"
          delay="delay-300"
        />
        <SummaryCard
          title="วันลาคงเหลือ"
          value={`${mockData.month.leaveRemaining} วัน`}
          subtitle={`ใช้ไป ${mockData.month.leaveDays} วัน`}
          icon={<CalendarDays className="h-5 w-5 text-white" />}
          iconBg="bg-gradient-to-br from-rose-500 to-rose-700"
          trend="neutral"
          trendValue="ปี 2569"
          delay="delay-400"
        />
      </div>

      {/* Recent activity + OT chart */}
      <div className="mb-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Recent logs */}
        <div className="animate-fade-in-up delay-300 lg:col-span-2 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200/60">
          <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4">
            <div>
              <h3 className="text-base font-bold text-slate-800">ประวัติการลงเวลาล่าสุด</h3>
              <p className="text-xs text-slate-400">5 วันล่าสุด</p>
            </div>
            <button className="text-sm font-medium text-teal-700 hover:text-teal-800 transition-colors">
              ดูทั้งหมด
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-100 text-xs text-slate-400">
                  <th className="px-6 py-3 text-left font-medium">วันที่</th>
                  <th className="px-4 py-3 text-center font-medium">เข้า</th>
                  <th className="px-4 py-3 text-center font-medium">ออก</th>
                  <th className="px-4 py-3 text-center font-medium">OT (ชม.)</th>
                  <th className="px-6 py-3 text-right font-medium">สถานะ</th>
                </tr>
              </thead>
              <tbody>
                {mockData.recentLogs.map((log, i) => (
                  <tr
                    key={i}
                    className="border-b border-slate-50 transition-colors hover:bg-slate-50/50"
                  >
                    <td className="px-6 py-3.5 font-medium text-slate-700">{log.date}</td>
                    <td className="px-4 py-3.5 text-center text-slate-600">{log.checkIn}</td>
                    <td className="px-4 py-3.5 text-center text-slate-600">{log.checkOut}</td>
                    <td className="px-4 py-3.5 text-center">
                      {log.ot > 0 ? (
                        <span className="font-semibold text-amber-600">{log.ot.toFixed(1)}</span>
                      ) : (
                        <span className="text-slate-300">—</span>
                      )}
                    </td>
                    <td className="px-6 py-3.5 text-right">
                      <span
                        className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${
                          log.status === 'สาย'
                            ? 'bg-amber-100 text-amber-700'
                            : 'bg-emerald-100 text-emerald-700'
                        }`}
                      >
                        {log.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* OT breakdown */}
        <div className="animate-fade-in-up delay-400 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200/60">
          <h3 className="mb-1 text-base font-bold text-slate-800">สรุปชั่วโมง OT</h3>
          <p className="mb-5 text-xs text-slate-400">เดือนกันยายน 2569</p>

          <div className="mb-6 flex items-end justify-between">
            <div>
              <p className="text-3xl font-bold text-slate-800">{mockData.month.otHours}</p>
              <p className="text-xs text-slate-400">ชั่วโมงรวม</p>
            </div>
            <div className="flex items-center gap-1 rounded-lg bg-emerald-50 px-2 py-1 text-xs font-semibold text-emerald-600">
              <TrendingUp className="h-3.5 w-3.5" />
              +15%
            </div>
          </div>

          {/* Mini bar chart */}
          <div className="space-y-3">
            <BarRow label="สัปดาห์ 1" value={8} max={22} color="bg-teal-500" />
            <BarRow label="สัปดาห์ 2" value={6.5} max={22} color="bg-teal-500" />
            <BarRow label="สัปดาห์ 3" value={7.5} max={22} color="bg-teal-600" />
            <BarRow label="สัปดาห์ 4" value={0} max={22} color="bg-slate-200" />
          </div>

          <div className="mt-5 border-t border-slate-100 pt-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-slate-500">ค่าเฉลี่ย/สัปดาห์</span>
              <span className="font-semibold text-slate-700">5.5 ชม.</span>
            </div>
            <div className="mt-2 flex items-center justify-between text-sm">
              <span className="text-slate-500">สูงสุดในวันเดียว</span>
              <span className="font-semibold text-slate-700">3.0 ชม.</span>
            </div>
          </div>
        </div>
      </div>

      {/* Quick actions */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-bold text-slate-800">เมนูหลัก</h3>
          <p className="text-sm text-slate-400">เลือกฟังก์ชันที่ต้องการใช้งาน</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <FeatureCard
          icon={<CalendarClock className="h-8 w-8 text-white" />}
          title="Plan Overtime"
          description="วางแผนและจัดการการทำงานล่วงเวลาล่วงหน้าสำหรับทีม FCO"
          gradient="bg-gradient-to-r from-teal-500 to-teal-700"
          iconBg="bg-gradient-to-br from-teal-500 to-teal-700"
          delay="delay-100"
          badge="แผน"
        />
        <FeatureCard
          icon={<CalendarRange className="h-8 w-8 text-white" />}
          title="Shift Overview"
          description="ภาพรวมกะการทำงานทั้งหมด ตรวจสอบตารางเวรได้ทุกช่วงเวลา"
          gradient="bg-gradient-to-r from-sky-500 to-sky-700"
          iconBg="bg-gradient-to-br from-sky-500 to-sky-700"
          delay="delay-200"
        />
        <FeatureCard
          icon={<Clock4 className="h-8 w-8 text-white" />}
          title="Over Time"
          description="บันทึกและติดตามชั่วโมงทำงานล่วงเวลา พร้อมสรุปยอดรวม"
          gradient="bg-gradient-to-r from-amber-500 to-orange-600"
          iconBg="bg-gradient-to-br from-amber-500 to-orange-600"
          delay="delay-300"
          badge="บันทึก"
        />
        <FeatureCard
          icon={<RefreshCw className="h-8 w-8 text-white" />}
          title="Change Norm"
          description="เปลี่ยนเวลามาตรฐานการทำงาน ปรับเวลาเข้า-ออกตามความเหมาะสม"
          gradient="bg-gradient-to-r from-rose-500 to-rose-700"
          iconBg="bg-gradient-to-br from-rose-500 to-rose-700"
          delay="delay-400"
        />
      </div>
    </main>
  );
}

function SummaryCard({
  title,
  value,
  subtitle,
  icon,
  iconBg,
  trend,
  trendValue,
  delay,
}: {
  title: string;
  value: string;
  subtitle: string;
  icon: React.ReactNode;
  iconBg: string;
  trend: 'up' | 'down' | 'neutral';
  trendValue: string;
  delay: string;
}) {
  return (
    <div
      className={`animate-fade-in-up ${delay} rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200/60 card-hover`}
    >
      <div className="flex items-start justify-between">
        <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${iconBg} shadow-md`}>
          {icon}
        </div>
        <div
          className={`flex items-center gap-1 text-xs font-medium ${
            trend === 'up'
              ? 'text-emerald-600'
              : trend === 'down'
                ? 'text-amber-600'
                : 'text-slate-400'
          }`}
        >
          {trend === 'up' && <TrendingUp className="h-3 w-3" />}
          {trend === 'down' && <TrendingDown className="h-3 w-3" />}
          {trend === 'neutral' && <Minus className="h-3 w-3" />}
        </div>
      </div>
      <p className="mt-4 text-xs text-slate-400">{title}</p>
      <p className="text-2xl font-bold text-slate-800">{value}</p>
      <div className="mt-1 flex items-center gap-2">
        <span className="text-xs text-slate-400">{subtitle}</span>
      </div>
      <p className="mt-2 text-xs text-slate-400">{trendValue}</p>
    </div>
  );
}

function BarRow({
  label,
  value,
  max,
  color,
}: {
  label: string;
  value: number;
  max: number;
  color: string;
}) {
  const pct = Math.round((value / max) * 100);
  return (
    <div className="flex items-center gap-3">
      <span className="w-20 text-xs text-slate-500">{label}</span>
      <div className="h-6 flex-1 overflow-hidden rounded-md bg-slate-100">
        <div
          className={`flex h-full items-center justify-end rounded-md ${color} transition-all duration-700`}
          style={{ width: `${pct}%` }}
        >
          {value > 0 && <span className="pr-2 text-[10px] font-semibold text-white">{value}</span>}
        </div>
      </div>
    </div>
  );
}
