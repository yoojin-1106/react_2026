import { useGreeting } from "../context/GreetingContext";

function GreetingForm(){
    const {greeting} = useGreeting();
    return (
        <div className="demo"> 
            <p className="greeting">{greeting}</p>
        </div>
    )
}

export default GreetingForm;