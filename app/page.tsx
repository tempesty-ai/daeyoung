import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, MapPin, Phone } from 'lucide-react';
import { PageLayout } from '@/components/layout/page-layout';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { businessInfo, collections, faqs, guideSteps, notices, products, quickLinks, reviews } from '@/lib/yjwp-data';
import { formatPrice } from '@/lib/shopify/utils';

export default function Home() {
  const heroProduct = products[0];

  return (
    <PageLayout>
      <section className="relative min-h-[86svh] overflow-hidden">
        <Image src={heroProduct.featuredImage.url} alt="대영벽지 대표 시공 이미지" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-black/42" />
        <div className="relative flex min-h-[86svh] flex-col justify-end px-sides pb-10 pt-28 text-white md:pb-14">
          <div className="mx-auto grid w-full max-w-7xl gap-10 md:grid-cols-12 md:items-end">
            <div className="md:col-span-8 lg:col-span-7">
              <Badge className="border-white/35 bg-white/12 text-white backdrop-blur" variant="outline-secondary">
                방산시장 도배 · 장판 · 마루 · 데코타일
              </Badge>
              <h1 className="font-display mt-5 text-5xl font-semibold leading-none tracking-normal md:text-7xl">대영벽지</h1>
              <p className="mt-5 max-w-2xl text-base font-normal leading-7 text-white/84 md:text-xl md:leading-8">
                제품 상담부터 견적, 시공 예약까지 공간에 맞는 마감재를 차분하게 안내합니다.
              </p>
              <div className="mt-7 flex flex-wrap gap-2">
                <Button asChild size="lg" className="bg-white text-foreground hover:bg-white/90">
                  <Link href="#quote">
                    <Phone className="mr-2 size-4" />
                    견적문의
                  </Link>
                </Button>
                <Button asChild size="lg" variant="secondary" className="bg-white/15 text-white hover:bg-white/25">
                  <Link href="/shop">
                    제품보기
                    <ArrowRight className="ml-2 size-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="grid gap-3 rounded-[8px] border border-white/20 bg-white/12 p-4 text-sm backdrop-blur-md md:col-span-4 lg:col-start-9">
              <p className="font-semibold text-white/65">대표 제품</p>
              <div className="flex items-end justify-between gap-4">
                <p className="text-lg font-bold leading-tight">{heroProduct.title}</p>
                <p className="shrink-0 text-lg font-bold">
                  {formatPrice(heroProduct.priceRange.minVariantPrice.amount, 'KRW')}
                </p>
              </div>
              <p className="flex items-start gap-2 text-white/72">
                <MapPin className="mt-0.5 size-4 shrink-0" />
                {businessInfo.address}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-sides py-12 md:py-16">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-4">
          {collections.map(collection => (
            <Link key={collection.handle} href={`/shop/${collection.handle}`} className="group block" prefetch>
              <div className="aspect-[5/4] overflow-hidden rounded-[8px] bg-muted">
                <Image
                  src={
                    products.find(product => product.categoryId === collection.handle)?.featuredImage.url ??
                    products[0].featuredImage.url
                  }
                  alt={collection.title}
                  width={900}
                  height={720}
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="mt-4 flex items-start justify-between gap-4">
                <div>
                  <h2 className="font-display text-xl font-semibold">{collection.title}</h2>
                  <p className="mt-1.5 text-sm leading-6 text-foreground/60">{collection.description}</p>
                </div>
                <ArrowRight className="mt-1 size-5 text-foreground/45 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section id="guide" className="border-y border-border/70 bg-muted/55 px-sides py-14 md:py-18">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-12">
          <div className="md:col-span-4">
            <Badge variant="outline-secondary">이용안내</Badge>
            <h2 className="font-display mt-4 max-w-xs text-3xl font-semibold leading-tight tracking-normal md:text-4xl">
              상담부터 시공까지
            </h2>
            <p className="mt-4 max-w-sm text-sm leading-6 text-foreground/62">
              일정, 제품, 현장 조건을 함께 확인해 시공 당일의 변수를 줄입니다.
            </p>
          </div>
          <div className="grid gap-3 md:col-span-8 md:grid-cols-2">
            {guideSteps.map(step => (
              <div key={step.title} className="rounded-[8px] border border-border/70 bg-background p-5">
                <h3 className="font-display text-lg font-semibold">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-foreground/64">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-sides py-12">
        <div className="mx-auto grid max-w-7xl gap-3 md:grid-cols-3">
          {quickLinks.map(link => (
            <Link
              key={link.title}
              href={link.href}
              className="rounded-[8px] border border-border/70 bg-background p-5 transition-colors hover:bg-muted"
            >
              <p className="font-display text-lg font-semibold">{link.title}</p>
              <p className="mt-2 text-sm leading-6 text-foreground/60">{link.body}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="px-sides pb-14 md:pb-18">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <h2 className="font-display text-2xl font-semibold tracking-normal md:text-3xl">시공후기</h2>
            <div className="mt-5 grid gap-1">
              {reviews.map((review, index) => (
                <div key={review} className="flex justify-between gap-4 border-b border-border/70 py-3.5 text-sm font-medium">
                  <span>{review}</span>
                  <span className="text-foreground/40">{index + 71}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="md:col-span-5">
            <h2 className="font-display text-2xl font-semibold tracking-normal md:text-3xl">공지사항</h2>
            <div className="mt-5 grid gap-3">
              {notices.map(notice => (
                <div key={notice.title} className="rounded-[8px] border border-border/70 bg-background p-4">
                  <p className="text-xs font-bold text-foreground/50">{notice.date}</p>
                  <p className="mt-1 font-bold">{notice.title}</p>
                  <p className="mt-2 text-sm leading-6 text-foreground/60">{notice.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="border-t border-border/70 px-sides py-12">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          {faqs.map(item => (
            <div key={item.q}>
              <h3 className="font-display font-semibold">{item.q}</h3>
              <p className="mt-2 text-sm leading-6 text-foreground/60">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="quote" className="px-sides pb-10">
        <div className="mx-auto grid max-w-7xl gap-8 rounded-[8px] bg-foreground p-6 text-background md:grid-cols-12 md:p-10">
          <div className="md:col-span-7">
            <p className="text-sm font-bold text-background/60">시공 및 견적 문의</p>
            <h2 className="font-display mt-3 text-3xl font-semibold tracking-normal md:text-5xl">{businessInfo.tel}</h2>
            <p className="mt-4 text-sm leading-6 text-background/70 md:text-base">
              {businessInfo.hours} · {businessInfo.closed}
            </p>
          </div>
          <div className="text-sm leading-6 text-background/70 md:col-span-5 md:self-end">
            <p>{businessInfo.address}</p>
            <p className="mt-2">FAX : {businessInfo.fax}</p>
            <p>E-MAIL : {businessInfo.email}</p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
