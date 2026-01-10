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
    <div className="mb-6" id={id}>
      {/* Sub-header */}
      <h4 className="text-olive-500 font-medium mb-3">{title}</h4>
      
      {/* Horizontal Scroll Container */}
      <div 
        className="flex overflow-x-auto gap-4 pb-4 -mx-4 px-4 snap-x snap-mandatory no-scrollbar"
      >
        {products.map((product) => (
          <div key={product.id} className="snap-center shrink-0">
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
