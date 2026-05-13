'use client';

import MobileMenu from './mobile-menu';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { LogoSvg } from './logo-svg';
import { NavItem } from '@/lib/types';
import { Collection } from '@/lib/shopify/types';

export const navItems: NavItem[] = [
  {
    label: '홈',
    href: '/',
  },
  {
    label: '제품보기',
    href: '/shop',
  },
  {
    label: '견적문의',
    href: '/#quote',
  },
  {
    label: '이용안내',
    href: '/#guide',
  },
  {
    label: 'FAQ',
    href: '/#faq',
  },
];

interface HeaderProps {
  collections: Collection[];
}

export function Header({ collections }: HeaderProps) {
  const pathname = usePathname();

  return (
    <header className="fixed left-0 top-0 z-50 w-full p-sides">
      <div className="grid w-full grid-cols-3 items-center rounded-[8px] border border-border/60 bg-background/82 px-3 py-2 shadow-sm backdrop-blur-md md:grid-cols-12 md:gap-sides md:px-4">
      <div className="block flex-none md:hidden">
        <MobileMenu collections={collections} />
      </div>
      <Link href="/" className="md:col-span-3 xl:col-span-2" prefetch>
        <LogoSvg className="w-auto max-md:place-self-center md:w-full max-w-72" />
      </Link>
      <nav className="flex gap-2 justify-end items-center md:col-span-9 xl:col-span-10">
        <ul className="hidden items-center gap-4 rounded-sm md:flex">
          {navItems.map(item => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  'text-sm font-semibold transition-colors duration-200',
                  pathname === item.href ? 'text-foreground' : 'text-foreground/50'
                )}
                prefetch
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="/#quote"
          className="hidden rounded-sm bg-foreground px-3 py-1.5 text-sm font-semibold text-background md:block"
        >
          02.2279.7538~9
        </Link>
      </nav>
      </div>
    </header>
  );
}
