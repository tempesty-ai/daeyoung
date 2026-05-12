export function LogoSvg({ className }: { className?: string }) {
  return (
    <div className={className} aria-label="대영벽지">
      <div className="text-2xl font-black leading-none tracking-normal md:text-5xl">대영벽지</div>
      <div className="mt-1 text-[10px] font-semibold uppercase tracking-normal text-foreground/60 md:text-xs">
        wallpaper · flooring · deco tile
      </div>
    </div>
  );
}
