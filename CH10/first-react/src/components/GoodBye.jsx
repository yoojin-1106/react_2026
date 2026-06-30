function GoodBye({name : name}){
    //console.log({name : name});
    return (
        <>  
            <div className="greeting">
                <p>안녕히가세요. {name}님, 다음에 또 만나요.</p>
            </div>
        </>
    );
};
export default GoodBye;