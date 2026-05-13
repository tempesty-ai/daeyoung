export function LogoSvg({ className }: { className?: string }) {
  return (
    <div className={className} aria-label="대영벽지">
      <div className="text-xl font-black leading-none tracking-normal md:text-3xl">대영벽지</div>
      <div className="mt-0.5 text-[9px] font-semibold uppercase tracking-normal text-current/55 md:text-[11px]">
        wallpaper · flooring · deco tile
      </div>
    </div>
  );
}
