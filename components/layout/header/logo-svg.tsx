export function LogoSvg({ className }: { className?: string }) {
  return (
    <div className={className} aria-label="대영벽지">
      <div className="text-[26px] font-black leading-[0.95] tracking-normal md:text-[30px]">대영벽지</div>
      <div className="mt-1 whitespace-nowrap text-[9px] font-bold uppercase leading-none tracking-normal text-current/55 md:text-[10px]">
        Wallpaper · Flooring · Deco Tile
      </div>
    </div>
  );
}
