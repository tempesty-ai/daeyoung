import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Phone } from "lucide-react";
import { PageLayout } from "@/components/layout/page-layout";
import { Button } from "@/components/ui/button";
import {
  businessInfo,
  collections,
  faqs,
  notices,
  products,
  reviews,
} from "@/lib/yjwp-data";

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
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(22,18,13,0.76),rgba(22,18,13,0.48)_48%,rgba(22,18,13,0.18))]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background/95 to-transparent" />
        <div className="relative flex min-h-[92svh] flex-col justify-end px-sides pb-12 pt-32 text-white md:pb-16">
          <div className="mx-auto grid w-full max-w-6xl gap-10 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <p className="text-xs font-semibold uppercase text-white/58">
                Wallpaper · Flooring · Deco tile
              </p>
              <h1 className="font-display mt-6 text-6xl font-bold leading-none tracking-normal md:text-8xl">
                대영벽지
              </h1>
              <p className="mt-6 max-w-xl text-lg font-normal leading-8 text-white/82 md:text-2xl md:leading-9">
                벽지와 바닥재를 고르는 가장 차분한 방법
              </p>
              <div className="mt-8 grid max-w-xl grid-cols-3 divide-x divide-white/18 border-y border-white/16 py-4 text-sm text-white/68">
                <div>
                  <p className="font-display text-2xl font-bold text-white">
                    4
                  </p>
                  <p className="mt-1">주요 품목</p>
                </div>
                <div className="pl-4">
                  <p className="font-display text-2xl font-bold text-white">
                    16
                  </p>
                  <p className="mt-1">선별 제품</p>
                </div>
                <div className="pl-4">
                  <p className="font-display text-2xl font-bold text-white">
                    1F
                  </p>
                  <p className="mt-1">을지로 매장</p>
                </div>
              </div>
              <div className="mt-8 flex flex-wrap gap-2">
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
            <div className="rounded-[8px] border border-white/16 bg-white/10 p-5 text-sm shadow-2xl shadow-black/20 backdrop-blur-md md:col-span-5">
              <p className="text-xs font-semibold uppercase text-white/50">
                Store
              </p>
              <p className="font-display mt-3 text-2xl font-bold leading-tight">
                을지로4가역 5~6번 출구 중간
              </p>
              <p className="mt-4 flex items-start gap-2 leading-6 text-white/68">
                <MapPin className="mt-0.5 size-4 shrink-0" />
                {businessInfo.address}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-sides py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 grid gap-5 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <p className="text-xs font-semibold uppercase text-foreground/42">
                Materials
              </p>
              <h2 className="font-display mt-3 text-4xl font-bold leading-tight md:text-5xl">
                공간에 맞는 마감재 선택
              </h2>
            </div>
            <div className="md:col-span-5">
              <p className="max-w-md text-sm leading-7 text-foreground/58">
                벽지부터 바닥재까지 매장에서 상담 가능한 품목을 한눈에
                확인하세요.
              </p>
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-4">
            {collections.map((collection, index) => (
              <Link
                key={collection.handle}
                href={`/shop/${collection.handle}`}
                className="group block"
                prefetch
              >
                <div className="relative aspect-[3/4] overflow-hidden rounded-[8px] bg-muted">
                  <Image
                    src={
                      products.find(
                        (product) => product.categoryId === collection.handle,
                      )?.featuredImage.url ?? products[0].featuredImage.url
                    }
                    alt={collection.title}
                    width={900}
                    height={1200}
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-[1.035]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/62 via-black/12 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                    <p className="text-xs text-white/58">0{index + 1}</p>
                    <h3 className="font-display mt-2 text-2xl font-bold">
                      {collection.title}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-sm leading-6 text-white/68">
                      {collection.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <Button asChild variant="secondary" className="w-fit">
              <Link href="/shop">
                전체 제품 보기
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="quote" className="px-sides py-4 md:py-8">
        <div className="mx-auto overflow-hidden rounded-[8px] bg-foreground text-background md:max-w-6xl">
          <div className="grid gap-8 p-7 md:grid-cols-12 md:p-12">
            <div className="md:col-span-7">
              <p className="text-sm font-semibold text-background/58">
                견적문의
              </p>
              <h2 className="font-display mt-3 text-5xl font-bold leading-none md:text-7xl">
                {businessInfo.tel}
              </h2>
              <p className="mt-6 max-w-xl text-base leading-7 text-background/72">
                벽지, 장판, 마루, 데코타일 제품 상담과 현장 견적을 전화로 빠르게
                안내해드립니다.
              </p>
            </div>
            <div className="grid gap-4 rounded-[8px] border border-background/15 bg-background/8 p-5 text-sm leading-6 text-background/72 md:col-span-5">
              <p className="flex items-start gap-2">
                <MapPin className="mt-1 size-4 shrink-0 text-background" />
                {businessInfo.address}
              </p>
              <p>{businessInfo.hours}</p>
              <div className="flex flex-wrap gap-2 border-t border-background/15 pt-4">
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
          </div>
        </div>
      </section>

      <section id="reviews" className="px-sides py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-12">
          <div className="md:col-span-7">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase text-foreground/42">
                  Review
                </p>
                <h2 className="font-display mt-3 text-2xl font-bold tracking-normal md:text-3xl">
                  시공후기
                </h2>
              </div>
              <span className="text-sm text-foreground/45">최근 상담 사례</span>
            </div>
            <div className="mt-5 grid gap-1 border-y border-border/70 py-2">
              {reviews.map((review, index) => (
                <div
                  key={review}
                  className="flex justify-between gap-4 px-1 py-3 text-sm font-medium"
                >
                  <span>{review}</span>
                  <span className="text-foreground/36">{index + 71}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="md:col-span-5">
            <p className="text-xs font-semibold uppercase text-foreground/42">
              Notice
            </p>
            <h2 className="font-display mt-3 text-2xl font-bold tracking-normal md:text-3xl">
              공지사항
            </h2>
            <div className="mt-5 grid gap-3">
              {notices.slice(0, 3).map((notice) => (
                <div
                  key={notice.title}
                  className="border-b border-border/70 pb-4"
                >
                  <p className="text-xs font-bold text-foreground/45">
                    {notice.date}
                  </p>
                  <p className="mt-1 font-bold">{notice.title}</p>
                  <p className="mt-2 text-sm leading-6 text-foreground/58">
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
              <p className="text-xs font-semibold uppercase text-foreground/42">
                FAQ
              </p>
              <h2 className="font-display mt-3 text-2xl font-bold md:text-3xl">
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
                <h3 className="font-display font-bold">{item.q}</h3>
                <p className="mt-2 text-sm leading-6 text-foreground/60">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
