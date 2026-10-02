import { ArrowRight } from 'lucide-react';

type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: string;
  iconBg: string;
  delay: string;
  badge?: string;
};

export default function FeatureCard({
  icon,
  title,
  description,
  gradient,
  iconBg,
  delay,
  badge,
}: FeatureCardProps) {
  return (
    <div
      className={`card-hover animate-fade-in-up ${delay} group relative cursor-pointer overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200/60 hover:shadow-2xl hover:ring-teal-200`}
    >
      {/* Gradient strip */}
      <div className={`h-1.5 w-full ${gradient}`} />

      <div className="p-6">
        {/* Badge */}
        {badge && (
          <span className="absolute top-4 right-4 rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-semibold text-amber-700">
            {badge}
          </span>
        )}

        {/* Icon */}
        <div
          className={`mb-5 flex h-16 w-16 items-center justify-center rounded-2xl ${iconBg} shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}
        >
          {icon}
        </div>

        {/* Title */}
        <h3 className="mb-2 text-lg font-bold text-slate-800 transition-colors group-hover:text-teal-700">
          {title}
        </h3>

        {/* Description */}
        <p className="mb-4 text-sm leading-relaxed text-slate-500">
          {description}
        </p>

        {/* Action */}
        <div className="flex items-center gap-2 text-sm font-semibold text-teal-700 opacity-0 transition-all duration-300 group-hover:opacity-100">
          เปิดใช้งาน
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </div>
      </div>

      {/* Decorative circle */}
      <div className="absolute -bottom-8 -right-8 h-24 w-24 rounded-full bg-gradient-to-br from-slate-100 to-slate-200 opacity-40 transition-transform duration-500 group-hover:scale-150" />
    </div>
  );
}
