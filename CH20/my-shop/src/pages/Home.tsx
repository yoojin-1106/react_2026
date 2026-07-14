import { useState } from 'react'
import '../App.css'
import ProductGrid from '../components/ProductGrid' 
import { PRODUCTS } from '../data/products'
import type { Category } from '../types'
import CategoryFilter from '../components/CategoryFilter'
import SearchBar from '../components/SearchBar'

export default function Home() {
  const [category, setCategory] = useState<Category | 'all'>('all')
  const [query, setQuery] = useState('');
  
  const filtered = PRODUCTS.filter((p) => 
      (category === 'all' || p.category === category) 
                && (p.name.toLowerCase().includes(query.trim().toLowerCase()))
);

  return (
    <div className='container'>
      <div className='page-head'>
          <h1>전체상품</h1>          
      </div>
      <div className='toolbar'>
        <SearchBar value={query} onChange={setQuery}/>
        <CategoryFilter selected={category} onSelect={setCategory}/>
      </div>
      <ProductGrid products={filtered}/>
    </div>
  )
}

