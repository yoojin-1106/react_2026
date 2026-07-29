
export default function SearchBar({value, onChange, onSearch}){
    // value : 검색어

    function hansleSubmit(e){
        e.preventDefault();
        onSearch(value);
    }
    //console.log("SearchBar");

    return (
        <form className="search-bar" onSubmit={hansleSubmit}>
            <input 
                type="text" 
                placeholder="영화를 영어로 검색하세요"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                autoFocus
            />
            <button type="submit" className="primary" >검색</button>
        </form>
    )


}
