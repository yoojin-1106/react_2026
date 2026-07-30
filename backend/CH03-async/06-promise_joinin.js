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

save2DB({name:'김미미', email:'dsdsss@asdas.com'}).then(console.log).catch(console.log);