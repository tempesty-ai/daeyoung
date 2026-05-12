import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Phone } from 'lucide-react';
import { PageLayout } from '@/components/layout/page-layout';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { businessInfo, collections, faqs, guideSteps, notices, products, quickLinks, reviews } from '@/lib/yjwp-data';
import { formatPrice } from '@/lib/shopify/utils';

export default function Home() {
  const heroProduct = products[0];

  return (
    <PageLayout>
      <section className="grid min-h-fold md:grid-cols-12 md:gap-sides">
        <div className="flex flex-col justify-end gap-8 p-sides pt-top-spacing md:col-span-5">
          <Badge className="w-fit" variant="outline-secondary">
            방산시장 도배 · 장판 · 마루 · 데코타일
          </Badge>
          <div>
            <h1 className="text-5xl font-black leading-none tracking-normal md:text-7xl xl:text-8xl">대영벽지</h1>
            <p className="mt-5 max-w-xl text-lg font-medium text-foreground/70">
              투명하고 거품없는 견적, 제품 상담부터 시공 예약까지 한 번에 안내합니다.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button asChild>
              <Link href="#quote">
                <Phone className="mr-2 size-4" />
                견적문의
              </Link>
            </Button>
            <Button asChild variant="secondary">
              <Link href="/shop">
                제품보기
                <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
          </div>
        </div>
        <Link href={`/product/${heroProduct.handle}`} className="relative min-h-[520px] md:col-span-7" prefetch>
          <Image src={heroProduct.featuredImage.url} alt={heroProduct.title} fill priority className="object-cover" />
          <div className="absolute inset-x-0 bottom-0 p-sides">
            <div className="max-w-md rounded-[8px] bg-background/85 p-3 backdrop-blur">
              <p className="text-sm font-semibold uppercase text-foreground/60">대표 제품</p>
              <div className="mt-2 flex items-end justify-between gap-4">
                <p className="text-lg font-semibold">{heroProduct.title}</p>
                <p className="shrink-0 text-lg font-bold">
                  {formatPrice(heroProduct.priceRange.minVariantPrice.amount, 'KRW')}
                </p>
              </div>
            </div>
          </div>
        </Link>
      </section>

      <section className="grid gap-sides p-sides md:grid-cols-4">
        {collections.map(collection => (
          <Link key={collection.handle} href={`/shop/${collection.handle}`} className="group block" prefetch>
            <div className="aspect-square overflow-hidden bg-muted">
              <Image
                src={products.find(product => product.categoryId === collection.handle)?.featuredImage.url ?? products[0].featuredImage.url}
                alt={collection.title}
                width={900}
                height={900}
                className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="mt-3 flex items-start justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold">{collection.title}</h2>
                <p className="mt-1 text-sm text-foreground/60">{collection.description}</p>
              </div>
              <ArrowRight className="mt-1 size-5" />
            </div>
          </Link>
        ))}
      </section>

      <section id="guide" className="grid gap-sides p-sides md:grid-cols-12">
        <div className="md:col-span-4">
          <Badge variant="outline-secondary">이용안내</Badge>
          <h2 className="mt-4 text-4xl font-black tracking-normal">상담부터 시공까지</h2>
        </div>
        <div className="grid gap-3 md:col-span-8 md:grid-cols-2">
          {guideSteps.map(step => (
            <div key={step.title} className="rounded-[8px] bg-muted p-5">
              <h3 className="text-xl font-bold">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/65">{step.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-sides p-sides md:grid-cols-3">
        {quickLinks.map(link => (
          <Link key={link.title} href={link.href} className="rounded-[8px] border border-border p-5 transition-colors hover:bg-muted">
            <p className="text-xl font-bold">{link.title}</p>
            <p className="mt-2 text-sm text-foreground/60">{link.body}</p>
          </Link>
        ))}
      </section>

      <section className="grid gap-sides p-sides md:grid-cols-12">
        <div className="md:col-span-7">
          <h2 className="text-3xl font-black tracking-normal">시공후기</h2>
          <div className="mt-5 grid gap-2">
            {reviews.map((review, index) => (
              <div key={review} className="flex justify-between gap-4 border-b border-border py-3 text-sm font-medium">
                <span>{review}</span>
                <span className="text-foreground/40">{index + 71}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="md:col-span-5">
          <h2 className="text-3xl font-black tracking-normal">공지사항</h2>
          <div className="mt-5 grid gap-3">
            {notices.map(notice => (
              <div key={notice.title} className="rounded-[8px] bg-muted p-4">
                <p className="text-xs font-bold text-foreground/50">{notice.date}</p>
                <p className="mt-1 font-bold">{notice.title}</p>
                <p className="mt-2 text-sm text-foreground/60">{notice.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="grid gap-sides p-sides md:grid-cols-3">
        {faqs.map(item => (
          <div key={item.q} className="border-t border-border pt-4">
            <h3 className="font-bold">{item.q}</h3>
            <p className="mt-2 text-sm text-foreground/60">{item.a}</p>
          </div>
        ))}
      </section>

      <section id="quote" className="p-sides">
        <div className="grid gap-8 rounded-[8px] bg-foreground p-6 text-background md:grid-cols-12 md:p-10">
          <div className="md:col-span-7">
            <p className="text-sm font-bold uppercase text-background/60">시공 및 견적 문의</p>
            <h2 className="mt-3 text-4xl font-black tracking-normal md:text-6xl">{businessInfo.tel.replaceAll('-', '.')}</h2>
            <p className="mt-4 text-background/70">{businessInfo.hours} · {businessInfo.closed}</p>
          </div>
          <div className="text-sm text-background/70 md:col-span-5 md:self-end">
            <p>{businessInfo.address}</p>
            <p className="mt-2">FAX : {businessInfo.fax}</p>
            <p>E-MAIL : {businessInfo.email}</p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
