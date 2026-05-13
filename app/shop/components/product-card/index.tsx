import React, { Suspense } from "react";
import Link from "next/link";
import { ArrowRightIcon, PhoneIcon } from "lucide-react";
import { Product } from "@/lib/shopify/types";
import { formatPrice } from "@/lib/shopify/utils";
import { ProductImage } from "./product-image";
import { Button } from "@/components/ui/button";

export const ProductCard = ({ product }: { product: Product }) => {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[8px] border border-border/70 bg-background transition-colors hover:bg-muted/35">
      <Link
        href={`/product/${product.handle}`}
        className="block aspect-[4/5] overflow-hidden bg-muted focus-visible:outline-none"
        aria-label={`${product.title} 상세 보기`}
        prefetch
      >
        <Suspense fallback={null}>
          <ProductImage product={product} />
        </Suspense>
      </Link>

      <div className="flex flex-1 flex-col gap-4 p-4">
        <div className="grid flex-1 gap-2">
          <h3 className="font-display text-lg font-semibold leading-snug text-balance">
            {product.title}
          </h3>
          <div className="grid gap-3 text-sm">
            <p className="line-clamp-2 min-h-12 leading-6 text-foreground/60">
              {product.description}
            </p>
            <p className="text-base font-bold">
              {formatPrice(
                product.priceRange.minVariantPrice.amount,
                product.priceRange.minVariantPrice.currencyCode,
              )}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <Button size="sm" variant="secondary" asChild>
            <Link href="/#quote">
              <PhoneIcon className="size-4" />
              견적문의
            </Link>
          </Button>
          <Button size="sm" variant="default" asChild>
            <Link href={`/product/${product.handle}`}>
              자세히
              <ArrowRightIcon className="size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </article>
  );
};
