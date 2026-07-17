export function AmbientBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute -top-40 left-1/2 h-[32rem] w-[52rem] -translate-x-1/2 rounded-full bg-sky-500/[0.07] blur-3xl" />
      <div className="absolute top-1/4 -left-48 h-[26rem] w-[32rem] rounded-full bg-indigo-500/[0.06] blur-3xl" />
      <div className="absolute top-1/2 -right-48 h-[28rem] w-[36rem] rounded-full bg-cyan-500/[0.05] blur-3xl" />
      <div className="absolute bottom-0 left-1/4 h-[26rem] w-[38rem] rounded-full bg-violet-500/[0.05] blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.035)_1px,transparent_1px)] [background-size:32px_32px]" />
    </div>
  );
}
