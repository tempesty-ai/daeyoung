export function LogoSvg({ className }: { className?: string }) {
  return (
    <div className={className} aria-label="대영벽지">
      <div className="font-display text-[27px] font-extrabold leading-[0.95] tracking-normal md:text-[30px]">
        대영벽지
      </div>
      <div className="mt-1.5 whitespace-nowrap text-[9px] font-bold uppercase leading-none tracking-normal text-current/45 md:text-[10px]">
        Wallpaper / Flooring / Deco Tile
      </div>
    </div>
  );
}
