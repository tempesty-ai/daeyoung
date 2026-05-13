export const ProductGrid = ({ children }: { children: React.ReactNode }) => {
  return <div className="grid grid-cols-1 gap-4 pr-sides md:grid-cols-2 xl:grid-cols-3">{children}</div>;
};
