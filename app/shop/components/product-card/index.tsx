import React, { Suspense } from 'react';
import Link from 'next/link';
import { Product } from '@/lib/shopify/types';
import { formatPrice } from '@/lib/shopify/utils';
import { ProductImage } from './product-image';
import { Button } from '@/components/ui/button';
import { ArrowRightIcon, PhoneIcon } from 'lucide-react';

export const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="group relative aspect-[3/4] w-full overflow-hidden rounded-[8px] bg-muted md:aspect-[4/5]">
      <Link
        href={`/product/${product.handle}`}
        className="block size-full focus-visible:outline-none"
        aria-label={`View details for ${product.title}, price ${product.priceRange.minVariantPrice}`}
        prefetch
      >
        <Suspense fallback={null}>
          <ProductImage product={product} />
        </Suspense>
      </Link>

      <div className="absolute inset-0 p-2 w-full pointer-events-none">
        <div className="hidden w-full translate-y-0 items-baseline justify-between gap-4 rounded-[6px] bg-background/75 px-3 py-2 text-sm font-semibold backdrop-blur-sm transition-all duration-300 group-hover:-translate-y-full group-hover:opacity-0 group-focus-visible:-translate-y-full group-focus-visible:opacity-0 md:flex">
          <p className="text-balance">{product.title}</p>
          <div className="flex shrink-0 items-center gap-2">
            {formatPrice(product.priceRange.minVariantPrice.amount, product.priceRange.minVariantPrice.currencyCode)}
            {product.compareAtPrice && (
              <span className="line-through opacity-30">
                {formatPrice(product.compareAtPrice.amount, product.compareAtPrice.currencyCode)}
              </span>
            )}
          </div>
        </div>

        <div className="pointer-events-auto absolute inset-x-3 bottom-3 flex flex-col gap-4 rounded-[8px] border border-border/70 bg-popover/94 px-3 py-3 shadow-sm backdrop-blur-sm transition-all duration-300 md:pointer-events-none md:translate-y-5 md:opacity-0 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:pointer-events-auto group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
          <div className="grid grid-cols-2 items-end gap-x-3 gap-y-4">
            <p className="text-base font-semibold leading-tight text-pretty">{product.title}</p>
            <div className="flex place-self-end items-center gap-2 text-base font-semibold">
              {formatPrice(product.priceRange.minVariantPrice.amount, product.priceRange.minVariantPrice.currencyCode)}
              {product.compareAtPrice && (
                <span className="text-base line-through opacity-30">
                  {formatPrice(product.compareAtPrice.amount, product.compareAtPrice.currencyCode)}
                </span>
              )}
            </div>
            <Button className="col-start-1" size="sm" variant="secondary" asChild>
              <Link href="/#quote">
                <div className="flex justify-between items-center w-full">
                  <span>견적문의</span>
                  <PhoneIcon className="size-4" />
                </div>
              </Link>
            </Button>

            <Button className="col-start-2" size="sm" variant="default" asChild>
              <Link href={`/product/${product.handle}`}>
                <div className="flex justify-between items-center w-full">
                  <span>자세히</span>
                  <ArrowRightIcon className="size-4" />
                </div>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
