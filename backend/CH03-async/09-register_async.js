const DB = [];

function save2DB(user){
    const oldDBLength = DB.length;
    DB.push(user);
    console.log(`${user.name} 저장이 완료되었습니다.`);
    
    return new Promise((resolve, reject) => {
        if(DB.length > oldDBLength){
            resolve(user);
        }else{
            reject(new Error('저장에 실패했습니다.'));
        }
    })
};

function sendEmail(user){
    console.log(`${user.email} 저장이 완료되었습니다.`);
    return new Promise((resolve, reject) => {
        resolve(user);
    })
}

function getResult(user){
    return new Promise((resolve, reject) => {
        resolve(`${user.name}님 가입이 완료되었습니다.`);
    })
}

async function registerByAsync(user) {
    try {
        const save2DB = await save2DB(user);
        const sendEmail = await sendEmail(user);
        const getResult = await getResult(user);
        return save2DB + sendEmail + getResult;
        
    } catch (error) {
        console.error('registerByAsync error : ', error);
        
    }
} 

const user = registerByAsync({name : '안유진', email : 'ive@ive.com'}).then(console.log);