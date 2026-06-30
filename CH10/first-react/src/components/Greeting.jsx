function Greeting({name : name}){
    // name : 사람이름 
    // Greeting함수 호출 시 name 호출 
    // 일종의 컴포넌트

    return(
        <p>안녕하세요, <strong>{name}</strong>님 ! react에 입문하신 것을 축하드립니다.</p>
    );
}

//외부에서 함수를 사용할 수 있게 export 한다. *******************
export default Greeting;