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
    <header className="fixed left-0 top-0 z-50 w-full px-4 py-4">
      <div className="mx-auto grid w-full max-w-[1040px] grid-cols-3 items-center rounded-[8px] border border-border/70 bg-background/92 px-3 py-2.5 shadow-sm backdrop-blur-md md:flex md:justify-between md:gap-8 md:px-5">
        <div className="block flex-none md:hidden">
          <MobileMenu collections={collections} />
        </div>
        <Link href="/" className="min-w-fit" prefetch>
          <LogoSvg className="w-fit max-w-64 max-md:place-self-center" />
        </Link>
        <nav className="flex min-w-0 items-center justify-end gap-2">
          <ul className="hidden items-center gap-3 rounded-sm md:flex">
            {navItems.map(item => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    'text-sm font-semibold transition-colors duration-200',
                    pathname === item.href ? 'text-foreground' : 'text-foreground/50 hover:text-foreground'
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
