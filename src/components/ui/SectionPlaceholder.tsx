export function SectionPlaceholder({ className = "h-96" }: { className?: string }) {
  return (
    <div
      className={`mx-auto max-w-7xl animate-pulse rounded-2xl bg-slate-100 ${className}`}
      aria-hidden
    />
  );
}
