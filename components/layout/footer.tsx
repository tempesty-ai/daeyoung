import Link from "next/link";
import { LogoSvg } from "./header/logo-svg";
import { businessInfo } from "@/lib/yjwp-data";

export async function Footer() {
  return (
    <footer className="px-sides pb-sides">
      <div className="mx-auto flex min-h-[300px] max-w-6xl flex-col justify-between gap-10 rounded-[8px] bg-foreground p-6 text-background md:p-9">
        <div className="grid gap-8 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-7">
            <LogoSvg className="block max-w-[520px]" />
            <p className="mt-5 max-w-xl text-sm font-medium leading-6 text-background/70 md:text-base">
              대영벽지는 벽지, 장판, 마루, 데코타일 상담과 시공을 함께
              안내합니다.
            </p>
          </div>
          <div className="grid gap-3 text-sm font-medium md:col-span-5 md:grid-cols-2">
            {[
              { label: "견적문의", href: "/#quote" },
              { label: "도배", href: "/shop/wallpaper" },
              { label: "마루", href: "/shop/wood-floor" },
              { label: "장판", href: "/shop/flooring" },
              { label: "데코타일", href: "/shop/deco-tile" },
              { label: "시공후기", href: "/#reviews" },
              { label: "제품보기", href: "/shop" },
              { label: "FAQ", href: "/#faq" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-background/70 hover:text-background"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="grid gap-5 border-t border-background/20 pt-6 text-xs leading-6 text-background/60 md:grid-cols-12 md:text-sm">
          <div className="md:col-span-8">
            <p>
              상호명 : {businessInfo.name} 대표자 : {businessInfo.owner}{" "}
              사업자번호 : {businessInfo.businessNumber}
            </p>
            <p>
              통신 판매업 신고 번호 : {businessInfo.mailOrder} 주소 :{" "}
              {businessInfo.address}
            </p>
            <p>
              TEL : {businessInfo.tel} FAX : {businessInfo.fax} E-MAIL :{" "}
              {businessInfo.email}
            </p>
          </div>
          <div className="font-medium md:col-span-4 md:text-right">
            <p>시공 및 견적 문의</p>
            <p className="font-display text-2xl font-semibold text-background">
              {businessInfo.tel}
            </p>
            <p>{businessInfo.hours}</p>
            <p>{businessInfo.closed}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
