import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';
import Link from 'next/link';

const contactLinks = [
  { label: '서울 중구 을지로 183', href: 'https://map.naver.com/' },
  { label: '02-2279-7538~9', href: 'tel:0222797538' },
  { label: '견적문의', href: '/#quote' },
];

const linkVariants = cva('leading-tight transition-colors hover:underline ease-out duration-200 whitespace-nowrap', {
  variants: {
    invert: {
      true: 'text-background/50 hover:text-background',
      false: 'text-muted-foreground hover:text-foreground',
    },
    size: {
      sm: 'text-xs 2xl:text-sm',
      base: 'text-sm 2xl:text-base',
    },
  },
  defaultVariants: {
    invert: false,
    size: 'sm',
  },
});

interface SidebarLinksProps {
  className?: string;
  invert?: boolean;
  size?: 'sm' | 'base';
}

export function SidebarLinks({ className, invert, size }: SidebarLinksProps) {
  return (
    <ul className={cn('flex flex-row gap-2 justify-between', className)}>
      {contactLinks.map(link => (
        <li key={link.href}>
          <Link href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} className={linkVariants({ invert, size })}>
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
