interface SearchBarProps{
    value : string;
    onChange : (value : string) => void;
    placeholder? : string;
}
//void -> return 값이 없다

export default function SearchBar({value, onChange, placeholder = '상품검색'} : SearchBarProps){
    return (
        <input
            type="text"
            className="search-input"
            value={value}
            placeholder={placeholder}
            onChange={(e) => onChange(e.target.value)}
        />
    )
}