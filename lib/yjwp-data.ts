import type { Collection, Product } from '@/lib/shopify/types';

const imageFor = (seed: string) =>
  `https://images.unsplash.com/${seed}?auto=format&fit=crop&w=1400&q=85`;

export const businessInfo = {
  name: '대영벽지',
  owner: '이영섭',
  businessNumber: '647-14-01687',
  mailOrder: '서울 중구 2154호',
  address: '서울특별시 중구 을지로 193 1층 (을지로4가)',
  tel: '02-2264-2300',
  fax: '02-2264-2303',
  email: 'sellma001@daum.net',
  hours: '월요일 ~ 토요일 : 오전 9시 ~ 오후 6시',
  closed: '일요일은 휴무',
};

export const guideSteps = [
  {
    title: '견적문의',
    body: '홈페이지 견적문의, 전화상담, 매장방문을 통해 견적을 받아보실 수 있습니다. 도면 첨부 또는 실측 사이즈를 알려주시면 더 정확하게 안내해드립니다.',
  },
  {
    title: '시공예약',
    body: '견적 확인 후 일정과 자재를 확정합니다. 시공 지역과 현장 상황에 따라 경비가 발생할 수 있습니다.',
  },
  {
    title: '시공 전 체크',
    body: '가구 이동, 현장 정리, 기존 마감재 상태를 미리 확인하면 당일 시공이 훨씬 매끄럽습니다.',
  },
  {
    title: 'A/S 접수',
    body: '시공 후 확인이 필요한 부분은 상담 채널로 접수해주시면 현장 상황에 맞춰 안내드립니다.',
  },
];

export const quickLinks = [
  { title: '견적문의', body: '투명하고 거품없는 견적을 받아보세요.', href: '#quote' },
  { title: '제품보기', body: '취급하는 다양한 제품을 직접 만나보실 수 있습니다.', href: '/shop' },
  { title: '이용안내', body: '대영벽지 사용설명서', href: '#guide' },
  { title: 'FAQ', body: '자주 물어보는 질문을 확인하세요.', href: '#faq' },
  { title: '시공 예약확인', body: '시공예약현황을 간편하게 확인', href: '#quote' },
  { title: '변경 및 환불 규정', body: '일정 변경과 환불 기준 안내', href: '#faq' },
];

export const reviews = [
  '40년 된 노후 아파트의 기적, 예비 신혼부부의 인생 첫 도배·장판 성공기!',
  '방산시장 대영벽지 데코타일 내돈내산 인증 후기',
  '도배 후 새집이 되었어요~~^^',
  '대영벽지 합지 띄움시공 내돈내산',
  '참 일 잘하시네요~ ^^',
  '대영벽지 김팀장님 완전 능력자 ~!',
];

export const notices = [
  {
    date: '2026.04.28',
    title: '5월 연휴기간 영업안내',
    body: '5월 1일 노동절, 5월 5일 어린이날, 5월 25일 대체휴일 모두 정상영업합니다.',
  },
  {
    date: '2026.02.25',
    title: '3월 2일 대체공휴일 정상영업 안내',
    body: '고객님들의 많은 성원에 힘입어 대체공휴일에도 정상영업합니다.',
  },
  {
    date: '2026.02.13',
    title: '구정연휴 휴무공지',
    body: '2월 15일부터 2월 18일까지 휴무, 2월 19일부터 정상영업합니다.',
  },
  {
    date: '2025.12.30',
    title: '1월 1일 휴무 공지',
    body: '새해 복 많이 받으시고 2026년도 모두 건강한 한 해 되시기 바랍니다.',
  },
];

export const faqs = [
  { q: '견적은 어떻게 받나요?', a: '견적문의, 전화상담, 매장방문 모두 가능합니다. 도면이나 실측 사이즈가 있으면 더 정확합니다.' },
  { q: '제품 색상은 화면과 같나요?', a: '조명, 빛, 모니터 환경에 따라 색상 차이가 있을 수 있습니다.' },
  { q: '시공 가능 지역은 어디인가요?', a: '서울 및 수도권 중심으로 상담 가능하며, 거리에 따라 경비가 발생할 수 있습니다.' },
];

export const collections: Collection[] = [
  {
    handle: 'wallpaper',
    title: '벽지',
    description: 'LX, 개나리, 신한, 현대 등 다양한 벽지',
    seo: { title: '벽지', description: '실크벽지, 광폭합지, 소폭합지' },
    parentCategoryTree: [],
    updatedAt: '2026-05-12',
    path: '/shop/wallpaper',
  },
  {
    handle: 'flooring',
    title: '장판',
    description: 'LX, 현대, KCC 장판 제품',
    seo: { title: '장판', description: '주거 공간에 맞는 장판 제품' },
    parentCategoryTree: [],
    updatedAt: '2026-05-12',
    path: '/shop/flooring',
  },
  {
    handle: 'wood-floor',
    title: '마루',
    description: '동화, 구정, 한솔, 디엔메종 마루',
    seo: { title: '마루', description: '강마루와 프리미엄 마루' },
    parentCategoryTree: [],
    updatedAt: '2026-05-12',
    path: '/shop/wood-floor',
  },
  {
    handle: 'deco-tile',
    title: '데코타일',
    description: 'LX, 현대, 대진, 동신 데코타일',
    seo: { title: '데코타일', description: '상업공간과 주거공간 데코타일' },
    parentCategoryTree: [],
    updatedAt: '2026-05-12',
    path: '/shop/deco-tile',
  },
];

const rawProducts = [
  ['wallpaper', '개나리 57210-1 슈퍼화이트', '36000', '벽과 천장을 깨끗하게 정리하는 기본 화이트 벽지', 'photo-1615529182904-14819c35db37'],
  ['wallpaper', '신한 15132-3 크랙스톤 퓨어 웜그레이', '36000', '은은한 스톤 질감의 웜그레이 벽지', 'photo-1600210492486-724fe5c67fb0'],
  ['wallpaper', 'LX 82601-05 디아 회벽 크림 화이트', '44000', '차분한 회벽 텍스처의 크림 화이트', 'photo-1616046229478-9901c5536a45'],
  ['wallpaper', 'LX PR 002-12 회벽 크림 화이트', '65000', '프리미엄 라인의 부드러운 회벽 패턴', 'photo-1600566753190-17f0baa2a6c3'],
  ['flooring', 'LX XCF4541 베인 샌드스톤', '90000', '내추럴한 샌드스톤 무드의 장판 /1평', 'photo-1600121848594-d8644e57abab'],
  ['flooring', 'LX XCF3621 텐더 그레이', '90000', '밝고 안정적인 그레이 톤 장판 /1평', 'photo-1600566752355-35792bedcfea'],
  ['flooring', 'LX ZJ 44351 그레이 콘크리트', '37000', '모던한 콘크리트 질감의 합리적인 장판 /1평', 'photo-1600607687920-4e2a09cf159d'],
  ['flooring', 'KCC KA50-5253 플로우 스톤', '90000', '흐르는 듯한 스톤 패턴 장판 /1평', 'photo-1600210491892-03d54c0aaf87'],
  ['wood-floor', '한솔 8033 페인티드 블랙', '88000', '공간에 무게감을 주는 블랙 계열 마루 /1평', 'photo-1600585154526-990dced4db0d'],
  ['wood-floor', '한솔 8029 더블딥 브라운', '88000', '깊은 브라운 톤의 안정감 있는 마루 /1평', 'photo-1600566753376-12c8ab7fb75b'],
  ['wood-floor', '구정 스웨디시 화이트', '108000', '밝고 넓어 보이는 스웨디시 화이트 마루 /1평', 'photo-1600573472550-8090b5e0745e'],
  ['wood-floor', '구정 그랜드 스테디', '118000', '오래 보아도 질리지 않는 프리미엄 마루 /1평', 'photo-1600607687939-ce8a6c25118c'],
  ['deco-tile', '대진 HOUR 0037', '40000', '상업공간에 어울리는 실용적인 데코타일 /1평', 'photo-1600585154340-be6161a56a0c'],
  ['deco-tile', '동신 AH 6103', '39000', '관리하기 쉬운 베이직 데코타일 /1평', 'photo-1600566753086-00f18fb6b3ea'],
  ['deco-tile', 'ZTO 0761 화이트 베실리우스', '45000', '깔끔한 화이트 스톤 무드의 데코타일 /1평', 'photo-1600607687644-c7171b42498b'],
  ['deco-tile', 'ZOW 0715 퓨어 애쉬', '45000', '밝은 애쉬 우드 톤 데코타일 /1평', 'photo-1600566753151-384129cf4e3e'],
] as const;

export const products: Product[] = rawProducts.map(([category, title, price, description, image], index) => {
  const handle = title
    .toLowerCase()
    .replace(/[^a-z0-9가-힣]+/g, '-')
    .replace(/^-|-$/g, '');

  return {
    id: `yjwp-${index + 1}`,
    title,
    handle,
    categoryId: category,
    description,
    descriptionHtml: `<p>${description}</p><p>현장 환경과 조명에 따라 색상 차이가 있을 수 있으니 상담 후 선택을 권장합니다.</p>`,
    featuredImage: {
      url: imageFor(image),
      altText: title,
      height: 1400,
      width: 1400,
    },
    currencyCode: 'KRW',
    priceRange: {
      minVariantPrice: { amount: price, currencyCode: 'KRW' },
      maxVariantPrice: { amount: price, currencyCode: 'KRW' },
    },
    seo: { title, description },
    options: [{ id: 'sample', name: '상담', values: [{ id: 'quote', name: '견적문의' }] }],
    tags: [],
    variants: [
      {
        id: `variant-${index + 1}`,
        title: '기본',
        availableForSale: true,
        selectedOptions: [{ name: '상담', value: '견적문의' }],
        price: { amount: price, currencyCode: 'KRW' },
      },
    ],
    images: [
      { url: imageFor(image), altText: title, height: 1400, width: 1400 },
      { url: imageFor('photo-1600607688969-a5bfcd646154'), altText: `${title} 시공 예시`, height: 1400, width: 1400 },
    ],
    availableForSale: true,
  };
});
