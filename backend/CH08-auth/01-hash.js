// hash :  같은길이, 암호화 뒤 복호화 불가, 비동기  (bcrypt:동기)

const bcrypt = require('bcrypt');
const password = '123456787';
const saltRound = 10;

let hashed = bcrypt.hashSync(password, saltRound);
console.log(`password => ${password}, hashed => ${hashed}`);
// password => $2b $10 $Bp765cG6uU6EqWkMPGId3.SuVREDqcHR6XQUSyKINoigGF1iBXOOG
// $2b : 버젼
// $10 : ? 버젼 비슷한거
// 앞에 대충 이정도 $Bp765cG6uU6EqWk 가 salt
//나머지가 찐 암호 MPGId3.SuVREDqcHR6XQUSyKINoigGF1iBXOOG

const result = bcrypt.compareSync(password, hashed);
console.log(`result => ${result}`);
// result => true 비번 일치

const result2 = bcrypt.compareSync('password', hashed);
console.log(`result2 => ${result2}`);
// result2 => false 비번 불일치

//나중엔 비동기로 할거임 이런 형식으로
(async () => {
    const hashed1 = await bcrypt.hash(password, saltRound);
    const result1 = await bcrypt.compare(password, hashed);
    console.log(`hashed1 => ${hashed1}, result1 => ${result1}`);
    // $2b$10$vEE.lBezyXGdV/3gZn1l2.mKrW.M/pMiCpyBfxLCwUhZk9wbsnxyC, result1 => true 
    // $2b$10$Bp765cG6uU6EqWkMPGId3.SuVREDqcHR6XQUSyKINoigGF1iBXOOG
    // salt가 매번 달라서 값이 달라져 나온다.

})();