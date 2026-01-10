import React from 'react';
import ProductCard from './ProductCard';
import { Product } from '../data/products';

interface CategorySectionProps {
  title: string;
  products: Product[];
  id?: string;
}

export default function CategorySection({ title, products, id }: CategorySectionProps) {
  return (
    <div className="mb-6 md:mb-8 lg:mb-12 xl:mb-16" id={id}>
      <h4 className="text-olive-500 font-medium md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl mb-3 md:mb-4 xl:mb-6">{title}</h4>
      
      <div 
        className="flex md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 overflow-x-auto md:overflow-visible gap-4 xl:gap-6 2xl:gap-8 pb-4 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 snap-x snap-mandatory md:snap-none no-scrollbar"
      >
        {products.map((product) => (
          <div key={product.id} className="snap-center md:snap-align-none shrink-0 md:shrink">
             <ProductCard 
                name={product.name}
                category={product.category}
                description={product.desc}
                price={product.price}
                image={product.image}
             />
          </div>
        ))}
      </div>
    </div>
  );
}
