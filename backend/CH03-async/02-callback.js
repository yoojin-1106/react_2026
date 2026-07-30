const DB = [];

function save2DB(user, callback){
    DB.push(user);
    console.log(`${user.name}님 데이터 베이스에 저장이 완료 되었습니다.`);
    return callback(user);
}

function sendEmail(user, callback){
    console.log(`${user.email} 으로 이메일이 전송 완료되었습니다.`);
    return callback(user);
}
function getResult(user){
    return `${user.name} 님 가입을 축하드립니다.`;   
}

function register(user){
    return save2DB(user, (user) => {
        return sendEmail(user, (user) => {
            return getResult(user);
        })
    })
}

const result = register({name:'손흥민', email:'ljkdsf@sdlkf'});

console.log(result);