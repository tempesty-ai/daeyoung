import { collections, products } from '@/lib/yjwp-data';
import type { Cart, Collection, Product, ProductCollectionSortKey, ProductSortKey } from './types';

// Public API functions
export async function getCollections(): Promise<Collection[]> {
  return collections;
}

export async function getCollection(handle: string): Promise<Collection | null> {
  const decodedHandle = decodeURIComponent(handle);
  return collections.find(collection => collection.handle === decodedHandle) ?? null;
}

export async function getProduct(handle: string): Promise<Product | null> {
  const decodedHandle = decodeURIComponent(handle);
  return products.find(product => product.handle === decodedHandle) ?? null;
}

export async function getProducts(params: {
  limit?: number;
  sortKey?: ProductSortKey;
  reverse?: boolean;
  query?: string;
}): Promise<Product[]> {
  const query = params.query?.toLowerCase();
  let result = query
    ? products.filter(product => `${product.title} ${product.description}`.toLowerCase().includes(query))
    : [...products];

  if (params.sortKey === 'PRICE') {
    result.sort((a, b) => Number(a.priceRange.minVariantPrice.amount) - Number(b.priceRange.minVariantPrice.amount));
  }
  if (params.sortKey === 'TITLE') {
    result.sort((a, b) => a.title.localeCompare(b.title, 'ko'));
  }
  if (params.reverse) result.reverse();

  return result.slice(0, params.limit ?? result.length);
}

export async function getCollectionProducts(params: {
  collection: string;
  limit?: number;
  sortKey?: ProductCollectionSortKey;
  reverse?: boolean;
  query?: string;
}): Promise<Product[]> {
  const result = await getProducts({
    limit: params.limit,
    query: params.query,
    reverse: params.reverse,
    sortKey: params.sortKey === 'PRICE' || params.sortKey === 'TITLE' ? params.sortKey : undefined,
  });

  return result.filter(product => product.categoryId === params.collection);
}

export async function getCart(): Promise<Cart | null> {
  try {
    const { getCart: getCartAction } = await import('@/components/cart/actions');
    return await getCartAction();
  } catch (error) {
    console.error('Error fetching cart:', error);
    return null;
  }
}

export async function createCart() {
  throw new Error('대영벽지는 상담 기반 견적 사이트로 장바구니 결제를 사용하지 않습니다.');
}

export async function addCartLines() {
  throw new Error('대영벽지는 상담 기반 견적 사이트로 장바구니 결제를 사용하지 않습니다.');
}

export async function updateCartLines() {
  throw new Error('대영벽지는 상담 기반 견적 사이트로 장바구니 결제를 사용하지 않습니다.');
}

export async function removeCartLines() {
  throw new Error('대영벽지는 상담 기반 견적 사이트로 장바구니 결제를 사용하지 않습니다.');
}
