import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  MapPin,
  Phone,
  Ruler,
} from "lucide-react";
import { PageLayout } from "@/components/layout/page-layout";
import { Button } from "@/components/ui/button";
import {
  businessInfo,
  collections,
  faqs,
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
        <div className="pointer-events-none absolute right-[-0.5rem] top-24 hidden font-display text-[12vw] font-bold leading-none text-white/8 md:block">
          DAEYOUNG
        </div>
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background/95 to-transparent" />
        <div className="relative flex min-h-[92svh] flex-col justify-end px-sides pb-10 pt-32 text-white md:pb-12">
          <div className="mx-auto grid w-full max-w-6xl gap-6 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-6">
              <p className="text-xs font-semibold uppercase text-white/58">
                Wallpaper · Flooring · Deco tile
              </p>
              <h1 className="font-display mt-6 text-6xl font-bold leading-none tracking-normal md:text-8xl">
                대영벽지
              </h1>
              <p className="mt-6 max-w-xl text-lg font-normal leading-8 text-white/84 md:text-2xl md:leading-9">
                견적부터 시공사례 확인까지, 을지로 매장에서 빠르게 상담합니다
              </p>
              <div className="mt-5 flex flex-wrap gap-2 text-xs font-semibold text-white/72">
                <span className="border border-white/18 bg-white/10 px-2.5 py-1.5 backdrop-blur-md">
                  mood first
                </span>
                <span className="border border-white/18 bg-white/10 px-2.5 py-1.5 backdrop-blur-md">
                  sample check
                </span>
                <span className="border border-white/18 bg-white/10 px-2.5 py-1.5 backdrop-blur-md">
                  quick quote
                </span>
              </div>
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
                    바로 견적문의
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="secondary"
                  className="bg-white/15 text-white hover:bg-white/25"
                >
                  <Link href="#reviews">
                    시공사례 보기
                    <ArrowRight className="ml-2 size-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="grid gap-3 lg:col-span-6">
              <div
                id="quote"
                className="rounded-[8px] border border-white/18 bg-white/94 p-5 text-foreground shadow-2xl shadow-black/25 backdrop-blur-md md:p-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-extrabold uppercase text-foreground/42">
                      Quick quote
                    </p>
                    <h2 className="font-display mt-2 text-3xl font-extrabold leading-tight md:text-4xl">
                      견적문의 바로하기
                    </h2>
                  </div>
                  <span className="rounded-full bg-foreground px-3 py-1.5 text-xs font-bold text-background">
                    상담중
                  </span>
                </div>
                <Link
                  href="tel:0222797538"
                  className="mt-5 flex items-center justify-between rounded-[8px] bg-foreground p-4 text-background transition-transform hover:scale-[1.01]"
                >
                  <span>
                    <span className="block text-xs font-semibold text-background/58">
                      전화 견적
                    </span>
                    <span className="font-display mt-1 block text-3xl font-extrabold leading-none md:text-4xl">
                      {businessInfo.tel}
                    </span>
                  </span>
                  <Phone className="size-6" />
                </Link>
                <div className="mt-4 grid gap-2 text-sm font-semibold text-foreground/68 sm:grid-cols-3">
                  <p className="flex items-center gap-2 rounded-[8px] bg-foreground/5 px-3 py-3">
                    <Ruler className="size-4 text-foreground" />
                    실측 상담
                  </p>
                  <p className="flex items-center gap-2 rounded-[8px] bg-foreground/5 px-3 py-3">
                    <CheckCircle2 className="size-4 text-foreground" />
                    자재 추천
                  </p>
                  <p className="flex items-center gap-2 rounded-[8px] bg-foreground/5 px-3 py-3">
                    <Clock className="size-4 text-foreground" />
                    빠른 안내
                  </p>
                </div>
                <p className="mt-4 flex items-start gap-2 text-sm leading-6 text-foreground/55">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-foreground" />
                  {businessInfo.address}
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {reviews.slice(0, 2).map((review, index) => (
                  <Link
                    href="#reviews"
                    key={review}
                    className="group overflow-hidden rounded-[8px] border border-white/16 bg-white/12 text-white shadow-xl shadow-black/15 backdrop-blur-md"
                  >
                    <div className="relative h-32 overflow-hidden">
                      <Image
                        src={products[index + 4].featuredImage.url}
                        alt={`${review} 시공사례`}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/72 to-transparent" />
                      <span className="absolute left-3 top-3 rounded-full bg-white px-2.5 py-1 text-xs font-extrabold text-foreground">
                        시공사례 0{index + 1}
                      </span>
                    </div>
                    <p className="line-clamp-2 p-4 text-sm font-bold leading-6 text-white/88">
                      {review}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border/70 bg-foreground px-sides py-3 text-background">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-5 overflow-hidden text-xs font-semibold uppercase">
          <span className="whitespace-nowrap text-background/72">
            Wallpaper
          </span>
          <span className="h-px flex-1 bg-background/18" />
          <span className="whitespace-nowrap text-background/72">Flooring</span>
          <span className="h-px flex-1 bg-background/18" />
          <span className="whitespace-nowrap text-background/72">
            Deco tile
          </span>
          <span className="h-px flex-1 bg-background/18 max-md:hidden" />
          <span className="hidden whitespace-nowrap text-background/72 md:inline">
            Consultation
          </span>
        </div>
      </section>

      <section className="px-sides py-12 md:py-16">
        <div className="mx-auto grid max-w-6xl gap-4 lg:grid-cols-12">
          <div className="rounded-[8px] bg-foreground p-6 text-background md:p-8 lg:col-span-5">
            <p className="text-xs font-extrabold uppercase text-background/50">
              Contact first
            </p>
            <h2 className="font-display mt-3 text-4xl font-extrabold leading-tight md:text-5xl">
              고민되면 사진부터 보내고 전화하세요
            </h2>
            <p className="mt-5 text-sm leading-7 text-background/68">
              방 크기, 원하는 분위기, 기존 벽 상태만 알려주셔도 제품 방향과
              예상 견적을 빠르게 잡아드립니다.
            </p>
            <Button
              asChild
              size="lg"
              className="mt-7 w-full bg-background text-foreground hover:bg-background/90"
            >
              <Link href="tel:0222797538">
                <Phone className="size-4" />
                지금 견적문의
              </Link>
            </Button>
          </div>
          <div className="grid gap-4 lg:col-span-7 md:grid-cols-3">
            {[
              ["01", "상담", "사진과 면적을 기준으로 필요한 자재를 먼저 좁힙니다."],
              ["02", "견적", "벽지, 장판, 마루, 데코타일별 예상 비용을 안내합니다."],
              ["03", "사례 확인", "비슷한 공간의 시공사례와 톤을 함께 비교합니다."],
            ].map(([number, title, body]) => (
              <div
                key={title}
                className="rounded-[8px] border border-border/70 bg-card p-5 md:min-h-64"
              >
                <p className="font-display text-4xl font-extrabold text-foreground/20">
                  {number}
                </p>
                <h3 className="font-display mt-12 text-2xl font-extrabold">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-foreground/58">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-sides py-8 md:py-16">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-12 md:items-center">
          <div className="relative min-h-[520px] md:col-span-7">
            <div className="absolute left-0 top-0 h-[390px] w-[72%] overflow-hidden rounded-[8px] bg-muted">
              <Image
                src={products[1].featuredImage.url}
                alt={products[1].title}
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute bottom-0 right-0 h-[330px] w-[54%] overflow-hidden rounded-[8px] border-[10px] border-background bg-muted">
              <Image
                src={products[8].featuredImage.url}
                alt={products[8].title}
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute left-6 top-[350px] max-w-56 rounded-[8px] bg-foreground p-4 text-background shadow-xl md:left-10">
              <p className="text-xs font-semibold uppercase text-background/50">
                mood board
              </p>
              <p className="font-display mt-2 text-2xl font-bold leading-tight">
                벽과 바닥의 톤을 같이 봅니다
              </p>
            </div>
          </div>
          <div className="md:col-span-5">
            <p className="text-xs font-semibold uppercase text-foreground/42">
              New standard
            </p>
            <h2 className="font-display mt-4 text-5xl font-bold leading-none md:text-7xl">
              요즘 공간은
              <br />
              톤이 먼저.
            </h2>
            <p className="mt-6 max-w-md text-base leading-8 text-foreground/62">
              흰 벽지 하나도 조명, 바닥재, 가구 톤에 따라 전혀 다르게 보입니다.
              대영벽지는 제품을 나열하기보다 공간의 분위기부터 맞춰봅니다.
            </p>
            <div className="mt-7 flex flex-wrap gap-2 text-sm font-semibold">
              <span className="bg-foreground px-3 py-2 text-background">
                warm white
              </span>
              <span className="border border-border px-3 py-2">soft gray</span>
              <span className="border border-border px-3 py-2">
                natural oak
              </span>
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

      <section id="quote-detail" className="px-sides py-4 md:py-8">
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
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 grid gap-5 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <p className="text-xs font-extrabold uppercase text-foreground/42">
                Real cases
              </p>
              <h2 className="font-display mt-3 text-4xl font-extrabold leading-tight md:text-5xl">
                시공사례 보고,
                <br />
                바로 견적까지
              </h2>
            </div>
            <div className="md:col-span-5">
              <p className="text-sm leading-7 text-foreground/58">
                비슷한 평형, 비슷한 분위기의 사례를 먼저 보고 상담하면 제품 선택이
                훨씬 빨라집니다.
              </p>
            </div>
          </div>

          <div className="grid gap-4 lg:grid-cols-12">
            <div className="grid gap-4 md:grid-cols-2 lg:col-span-8">
              {reviews.slice(0, 4).map((review, index) => (
                <Link
                  href="#quote"
                  key={review}
                  className="group overflow-hidden rounded-[8px] border border-border/70 bg-card"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                    <Image
                      src={products[index + 2].featuredImage.url}
                      alt={`${review} 시공사례`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                      <p className="text-xs font-bold text-white/58">
                        CASE 0{index + 1}
                      </p>
                      <h3 className="mt-2 line-clamp-2 text-lg font-extrabold leading-6">
                        {review}
                      </h3>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4 text-sm font-bold">
                    <span className="text-foreground/58">비슷한 공간 상담하기</span>
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              ))}
            </div>

            <aside className="rounded-[8px] bg-foreground p-6 text-background lg:col-span-4">
              <p className="text-xs font-extrabold uppercase text-background/50">
                Quote desk
              </p>
              <h3 className="font-display mt-3 text-3xl font-extrabold leading-tight">
                사례 캡처 후 전화하면 더 빠릅니다
              </h3>
              <div className="mt-6 grid gap-3 text-sm font-semibold text-background/70">
                <p className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-background" />
                  마음에 드는 시공 톤 선택
                </p>
                <p className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-background" />
                  공간 사진 또는 실측 사이즈 준비
                </p>
                <p className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-background" />
                  전화로 제품과 견적 방향 확인
                </p>
              </div>
              <Link
                href="tel:0222797538"
                className="mt-7 flex items-center justify-between rounded-[8px] bg-background p-4 text-foreground"
              >
                <span>
                  <span className="block text-xs font-bold text-foreground/45">
                    견적문의
                  </span>
                  <span className="mt-1 block text-2xl font-extrabold">
                    {businessInfo.tel}
                  </span>
                </span>
                <Phone className="size-5" />
              </Link>
            </aside>
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
