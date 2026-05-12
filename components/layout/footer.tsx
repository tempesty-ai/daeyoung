import Link from 'next/link';
import { LogoSvg } from './header/logo-svg';
import { businessInfo } from '@/lib/yjwp-data';

export async function Footer() {
  return (
    <footer className="p-sides">
      <div className="flex min-h-[420px] w-full flex-col justify-between gap-10 rounded-[8px] bg-foreground p-sides text-background md:p-11">
        <div className="grid gap-8 md:grid-cols-12 md:gap-sides">
          <div className="md:col-span-7">
            <LogoSvg className="block max-w-[760px]" />
            <p className="mt-6 max-w-xl text-base font-medium text-background/70">
              대영벽지는 벽지, 장판, 마루, 데코타일 상담과 시공을 함께 안내합니다.
            </p>
          </div>
          <div className="grid gap-4 text-sm font-semibold uppercase md:col-span-5 md:grid-cols-2">
            {['견적문의', '도배', '마루', '장판', '데코타일', '시공후기', '제품보기', 'FAQ'].map(item => (
              <Link key={item} href={item === '제품보기' ? '/shop' : '/#guide'} className="text-background/70 hover:text-background">
                {item}
              </Link>
            ))}
          </div>
        </div>

        <div className="grid gap-5 border-t border-background/20 pt-6 text-sm text-background/65 md:grid-cols-12">
          <div className="md:col-span-8">
            <p>
              상호명 : {businessInfo.name} 대표자 : {businessInfo.owner} 사업자번호 : {businessInfo.businessNumber}
            </p>
            <p>
              통신 판매업 신고 번호 : {businessInfo.mailOrder} 주소 : {businessInfo.address}
            </p>
            <p>
              TEL : {businessInfo.tel} FAX : {businessInfo.fax} E-MAIL : {businessInfo.email}
            </p>
          </div>
          <div className="font-semibold md:col-span-4 md:text-right">
            <p>시공 및 견적 문의</p>
            <p className="text-2xl text-background">{businessInfo.tel}</p>
            <p>{businessInfo.hours}</p>
            <p>{businessInfo.closed}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
