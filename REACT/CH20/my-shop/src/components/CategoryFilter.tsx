import { CATEGORY_LABELS } from "../types";
import type { Category } from "../types";

interface CategoryFilterProps{
        selected : Category | 'all'
        onSelect : (value : Category | 'all') => void // 앞으로
}

export default function CategoryFilter({selected, onSelect} : CategoryFilterProps){
    const categories = Object.keys(CATEGORY_LABELS) as Category[]; 
    // key 목록만 쭉 가져와서 배열 [] 에 넣는다.  categories는 배열 ['electronics' | 'fashion' | 'home' | 'book' | 'food' ]
    // string타입이 아니기 때문에 as Category[]을 추가하여 카테고리 배열 타입임을 선언해야 한다.
    return(
        <div className="chips">
            <button 
                    type="button" 
                    className={selected === 'all' ? 'chip active' : 'chip'} 
                    onClick={() => onSelect('all')}
            >전체</button>
            {
                categories.map((c) =>
                    <button 
                            type="button" 
                            key={c} 
                            className={selected === c ? 'chip active' : 'chip'} 
                            onClick={() => onSelect(c)}
                    >{CATEGORY_LABELS[c]}</button>
                    )
            }
        </div>
    )
}