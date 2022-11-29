import { useEffect, useState } from 'react';
import { publicRequest } from '~/api/axios';
import { IProduct } from '~/interfaces/Product';
import { Container } from './Components';
import { ProductItem } from './ProductItem';

interface ProductsProps {
  category?: string;
  filters?: {
    color: string;
    size: string;
  };
  sort?: string;
}

export const Products = ({ filters, category, sort }: ProductsProps) => {
  const [products, setProducts] = useState<IProduct[]>([]);

  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);

  const sortNewest = (a: IProduct, b: IProduct) =>
    new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();

  useEffect(() => {
    (async () => {
      const { data } = await publicRequest.get(
        category ? `/products?category=${category}` : '/products',
      );

      setProducts(data.sort(sortNewest));
    })();
  }, [category]);

  useEffect(() => {
    if (!filters) return;

    const filterArray = Object.entries(filters);

    setFilteredProducts(
      products.filter((item: any) =>
        filterArray.every(([key, value]) => (value ? item[key].includes(value) : true)),
      ),
    );
  }, [products, category, filters]);

  useEffect(() => {
    if (sort === 'newest') setFilteredProducts((p) => [...p].sort(sortNewest));
    else if (sort === 'asc') setFilteredProducts((p) => [...p].sort((a, b) => a.price - b.price));
    else if (sort === 'desc') setFilteredProducts((p) => [...p].sort((a, b) => b.price - a.price));
  }, [sort]);

  return (
    <Container>
      {category
        ? filteredProducts.map((p) => <ProductItem key={p._id} product={p} />)
        : products.slice(0, 8).map((p) => <ProductItem key={p._id} product={p} />)}
    </Container>
  );
};
