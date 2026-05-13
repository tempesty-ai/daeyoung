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
    <header className="fixed left-0 top-0 z-50 w-full px-sides py-3">
      <div className="mx-auto grid max-w-7xl grid-cols-3 items-center rounded-[8px] border border-border/70 bg-background/90 px-3 py-2 shadow-sm backdrop-blur-md md:grid-cols-12 md:gap-sides md:px-4">
        <div className="block flex-none md:hidden">
          <MobileMenu collections={collections} />
        </div>
        <Link href="/" className="md:col-span-4 xl:col-span-3" prefetch>
          <LogoSvg className="w-fit max-w-64 max-md:place-self-center" />
        </Link>
        <nav className="flex items-center justify-end gap-2 md:col-span-8 xl:col-span-9">
          <ul className="hidden items-center gap-4 rounded-sm md:flex">
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
