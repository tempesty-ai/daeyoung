import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  MapPin,
  Phone,
  Ruler,
} from "lucide-react";
import { PageLayout } from "@/components/layout/page-layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  businessInfo,
  collections,
  faqs,
  guideSteps,
  notices,
  products,
  quickLinks,
  reviews,
} from "@/lib/yjwp-data";
import { formatPrice } from "@/lib/shopify/utils";

export default function Home() {
  const heroProduct = products[0];

  return (
    <PageLayout>
      <section className="relative min-h-[92svh] overflow-hidden">
        <Image
          src={heroProduct.featuredImage.url}
          alt="대영벽지 대표 시공 이미지"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.72),rgba(0,0,0,0.42)_48%,rgba(0,0,0,0.2))]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background/95 to-transparent" />
        <div className="relative flex min-h-[92svh] flex-col justify-end px-sides pb-12 pt-32 text-white md:pb-16">
          <div className="mx-auto grid w-full max-w-6xl gap-8 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <Badge
                className="border-white/30 bg-white/12 text-white backdrop-blur-md"
                variant="outline-secondary"
              >
                방산시장 도배 · 장판 · 마루 · 데코타일
              </Badge>
              <h1 className="font-display mt-6 text-5xl font-semibold leading-none tracking-normal md:text-7xl">
                대영벽지
              </h1>
              <p className="mt-5 max-w-xl text-base font-normal leading-7 text-white/82 md:text-lg md:leading-8">
                제품 상담부터 견적, 시공 예약까지 공간에 맞는 마감재를 차분하게
                안내합니다.
              </p>
              <div className="mt-7 grid max-w-xl grid-cols-3 divide-x divide-white/20 border-y border-white/18 py-4 text-sm text-white/72">
                <div>
                  <p className="font-display text-2xl font-semibold text-white">
                    4
                  </p>
                  <p className="mt-1">주요 품목</p>
                </div>
                <div className="pl-4">
                  <p className="font-display text-2xl font-semibold text-white">
                    16
                  </p>
                  <p className="mt-1">선별 제품</p>
                </div>
                <div className="pl-4">
                  <p className="font-display text-2xl font-semibold text-white">
                    1F
                  </p>
                  <p className="mt-1">을지로 매장</p>
                </div>
              </div>
              <div className="mt-7 flex flex-wrap gap-2">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-foreground hover:bg-white/90"
                >
                  <Link href="#quote">
                    <Phone className="mr-2 size-4" />
                    견적문의
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="secondary"
                  className="bg-white/15 text-white hover:bg-white/25"
                >
                  <Link href="/shop">
                    제품보기
                    <ArrowRight className="ml-2 size-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="rounded-[8px] border border-white/18 bg-white/12 p-5 text-sm shadow-2xl shadow-black/20 backdrop-blur-md md:col-span-5">
              <div className="flex items-center justify-between gap-4 border-b border-white/15 pb-4">
                <p className="font-semibold text-white/64">대표 제품</p>
                <p className="rounded-sm bg-white/12 px-2 py-1 text-xs text-white/70">
                  Best pick
                </p>
              </div>
              <div className="mt-4 flex items-end justify-between gap-4">
                <p className="font-display text-xl font-semibold leading-tight">
                  {heroProduct.title}
                </p>
                <p className="shrink-0 text-lg font-semibold">
                  {formatPrice(
                    heroProduct.priceRange.minVariantPrice.amount,
                    "KRW",
                  )}
                </p>
              </div>
              <p className="mt-4 flex items-start gap-2 leading-6 text-white/68">
                <MapPin className="mt-0.5 size-4 shrink-0" />
                {businessInfo.address}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-sides py-14 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <Badge variant="outline-secondary">Product line</Badge>
              <h2 className="font-display mt-3 text-3xl font-semibold md:text-4xl">
                공간에 맞는 마감재 선택
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-6 text-foreground/60">
                벽지부터 바닥재까지 매장에서 상담 가능한 품목을 한눈에
                확인하세요.
              </p>
            </div>
            <Button asChild variant="secondary" className="w-fit">
              <Link href="/shop">
                전체 제품 보기
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
          <div className="grid gap-5 md:grid-cols-4">
            {collections.map((collection, index) => (
              <Link
                key={collection.handle}
                href={`/shop/${collection.handle}`}
                className="group block"
                prefetch
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-[8px] bg-muted">
                  <Image
                    src={
                      products.find(
                        (product) => product.categoryId === collection.handle,
                      )?.featuredImage.url ?? products[0].featuredImage.url
                    }
                    alt={collection.title}
                    width={900}
                    height={720}
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent" />
                  <span className="absolute left-3 top-3 rounded-sm bg-white/85 px-2 py-1 text-xs font-semibold text-foreground">
                    0{index + 1}
                  </span>
                </div>
                <div className="mt-4 flex min-h-24 items-start justify-between gap-4">
                  <div>
                    <h2 className="font-display text-xl font-semibold">
                      {collection.title}
                    </h2>
                    <p className="mt-1.5 text-sm leading-6 text-foreground/60">
                      {collection.description}
                    </p>
                  </div>
                  <ArrowRight className="mt-1 size-5 text-foreground/45 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section
        id="guide"
        className="border-y border-border/70 bg-muted/50 px-sides py-16 md:py-20"
      >
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <Badge variant="outline-secondary">이용안내</Badge>
            <h2 className="font-display mt-4 max-w-sm text-3xl font-semibold leading-tight tracking-normal md:text-4xl">
              상담부터 시공까지
            </h2>
            <p className="mt-4 max-w-sm text-sm leading-6 text-foreground/62">
              일정, 제품, 현장 조건을 함께 확인해 시공 당일의 변수를 줄입니다.
            </p>
            <div className="mt-7 grid gap-3 text-sm text-foreground/68">
              <p className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-foreground" /> 도면/실측
                상담 가능
              </p>
              <p className="flex items-center gap-2">
                <Clock3 className="size-4 text-foreground" /> 월~토 09:00-18:00
              </p>
              <p className="flex items-center gap-2">
                <Ruler className="size-4 text-foreground" /> 현장 조건별 견적
                안내
              </p>
            </div>
          </div>
          <div className="grid gap-3 md:col-span-8 md:grid-cols-2">
            {guideSteps.map((step, index) => (
              <div
                key={step.title}
                className="rounded-[8px] border border-border/70 bg-background p-5 transition-colors hover:bg-white"
              >
                <div className="mb-5 flex size-9 items-center justify-center rounded-sm bg-foreground text-sm font-semibold text-background">
                  {index + 1}
                </div>
                <h3 className="font-display text-xl font-semibold">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-foreground/64">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-sides py-14">
        <div className="mx-auto grid max-w-6xl gap-3 md:grid-cols-3">
          {quickLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="group rounded-[8px] border border-border/70 bg-background p-5 transition-colors hover:bg-muted"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-display text-lg font-semibold">
                    {link.title}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-foreground/60">
                    {link.body}
                  </p>
                </div>
                <ArrowRight className="mt-1 size-4 shrink-0 text-foreground/35 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="px-sides pb-16 md:pb-20">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-12">
          <div className="md:col-span-7">
            <div className="flex items-end justify-between gap-4">
              <div>
                <Badge variant="outline-secondary">Review</Badge>
                <h2 className="font-display mt-3 text-2xl font-semibold tracking-normal md:text-3xl">
                  시공후기
                </h2>
              </div>
              <span className="text-sm text-foreground/45">최근 상담 사례</span>
            </div>
            <div className="mt-5 grid gap-1 rounded-[8px] border border-border/70 bg-background p-2">
              {reviews.map((review, index) => (
                <div
                  key={review}
                  className="flex justify-between gap-4 rounded-sm px-3 py-3 text-sm font-medium transition-colors hover:bg-muted"
                >
                  <span>{review}</span>
                  <span className="text-foreground/40">{index + 71}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="md:col-span-5">
            <Badge variant="outline-secondary">Notice</Badge>
            <h2 className="font-display mt-3 text-2xl font-semibold tracking-normal md:text-3xl">
              공지사항
            </h2>
            <div className="mt-5 grid gap-3">
              {notices.map((notice) => (
                <div
                  key={notice.title}
                  className="rounded-[8px] border border-border/70 bg-background p-4 transition-colors hover:bg-muted"
                >
                  <p className="text-xs font-bold text-foreground/50">
                    {notice.date}
                  </p>
                  <p className="mt-1 font-bold">{notice.title}</p>
                  <p className="mt-2 text-sm leading-6 text-foreground/60">
                    {notice.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="border-t border-border/70 px-sides py-14">
        <div className="mx-auto max-w-6xl">
          <div className="mb-7 flex flex-col justify-between gap-3 md:flex-row md:items-end">
            <div>
              <Badge variant="outline-secondary">FAQ</Badge>
              <h2 className="font-display mt-3 text-2xl font-semibold md:text-3xl">
                자주 묻는 질문
              </h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-foreground/58">
              방문 전 궁금한 점을 먼저 확인하고, 자세한 견적은 전화로 빠르게
              안내받으실 수 있습니다.
            </p>
          </div>
          <div className="grid gap-3 md:grid-cols-3">
            {faqs.map((item) => (
              <div
                key={item.q}
                className="rounded-[8px] border border-border/70 bg-background p-5"
              >
                <h3 className="font-display font-semibold">{item.q}</h3>
                <p className="mt-2 text-sm leading-6 text-foreground/60">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="quote" className="px-sides pb-12">
        <div className="mx-auto grid max-w-6xl gap-8 rounded-[8px] bg-foreground p-6 text-background md:grid-cols-12 md:p-10">
          <div className="md:col-span-7">
            <p className="text-sm font-bold text-background/60">
              시공 및 견적 문의
            </p>
            <h2 className="font-display mt-3 text-3xl font-semibold tracking-normal md:text-5xl">
              {businessInfo.tel}
            </h2>
            <p className="mt-4 text-sm leading-6 text-background/70 md:text-base">
              {businessInfo.hours} · {businessInfo.closed}
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              <Button
                asChild
                className="bg-background text-foreground hover:bg-background/90"
              >
                <Link href="tel:0222797538">
                  <Phone className="size-4" />
                  바로 전화하기
                </Link>
              </Button>
              <Button
                asChild
                variant="secondary"
                className="bg-background/12 text-background hover:bg-background/18"
              >
                <Link href="/shop">
                  제품 둘러보기
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="rounded-[8px] border border-background/15 bg-background/8 p-5 text-sm leading-6 text-background/70 md:col-span-5 md:self-end">
            <p className="flex items-start gap-2">
              <MapPin className="mt-1 size-4 shrink-0 text-background" />
              {businessInfo.address}
            </p>
            <p className="mt-4 border-t border-background/15 pt-4">
              FAX : {businessInfo.fax}
            </p>
            <p>E-MAIL : {businessInfo.email}</p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
