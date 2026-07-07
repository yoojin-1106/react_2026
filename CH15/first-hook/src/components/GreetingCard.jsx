import { useGreeting } from "../context/GreetingContext";

function GreetingCard(){
    const {greeting, setGreeting} = useGreeting();
    return (
        <div className="demo">
            <input type="text" value={greeting} onChange={(e) => setGreeting(e.target.value)} placeholder="입력해보세요." />
        </div>
    )
}

export default GreetingCard;