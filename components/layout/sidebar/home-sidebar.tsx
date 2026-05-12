import { ShopLinks } from '../shop-links';
import { Collection } from '@/lib/shopify/types';

interface HomeSidebarProps {
  collections: Collection[];
}

export function HomeSidebar({ collections }: HomeSidebarProps) {
  return (
    <aside className="max-md:hidden col-span-4 h-screen sticky top-0 p-sides pt-top-spacing flex flex-col justify-between">
      <div>
        <p className="italic text-base">대영벽지 시공 상담</p>
        <div className="mt-5 text-base leading-tight">
          <p>도배, 장판, 마루, 데코타일.</p>
          <p>상담부터 시공 예약까지 안내합니다.</p>
          <p>전화 견적과 방문 상담이 가능합니다.</p>
        </div>
      </div>
      <ShopLinks collections={collections} />
    </aside>
  );
}
