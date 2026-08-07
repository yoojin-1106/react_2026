const jwt = require('jsonwebtoken');
const secret = 'wf3k]s04C7T3';

const token = jwt.sign({id:1, name:'홍길동', lvl:3}, secret, {expiresIn : '1h'});
//console.log('token : ', token);
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6Iu2Zjeq4uOuPmSIsImx2bCI6MywiaWF0IjoxNzg2MDY0NDM4LCJleHAiOjE3ODYwNjgwMzh9.dShUeGZzsGXG2OMa-EYgJDipatIyyYvk8uAET_mMauM
/* 
함수 설명
function sign(payload: string | Buffer | object, secretOrPrivateKey: jwt.Secret | jwt.PrivateKey, options?: jwt.SignOptions)
: string (+4 overlods)
Synchronously sign the given payload into a JSON Web Token string payload - 
Payload to sign, could be an literal, buffer or string secretOrPrivateKey - 
Either the secret for HMAC algorithms, or the PEM encoded private key for RSA and ECDSA. [options] -
 Options for the signature returns - The JSON Web Token string
 */


const payload = jwt.verify(token, secret);
//console.log('payload : ', payload);
// payload :  { id: 1, name: '홍길동', lvl: 3, iat: 1786064843, exp: 1786068443 }
/*
함수 설명
 function verify(token: string
    , secretOrPublicKey: string | ArrayBuffer | SharedArrayBuffer | Uint8Array<ArrayBufferLike> | Buffer<ArrayBufferLike> | KeyObject | {
 key: string | Buffer;
 passphrase: string;
} | JsonWebKeyInput | Uint8ClampedArray<ArrayBufferLike> | Uint16Array<ArrayBufferLike> | Uint32Array<ArrayBufferLike> | Int8Array<ArrayBufferLike> | ... 9 more ... | RawPublicKeyInput, options?: jwt.VerifyOptions & {
 complete?: false;
}): jwt.JwtPayload | string (+6 overloads)

Synchronously verify given token using a secret or a public key to get a decoded token token - 
JWT string to verify secretOrPublicKey - 
Either the secret for HMAC algorithms, or the PEM encoded public key for RSA and ECDSA. [options] - 
Options for the verification returns - The decoded token.
 */

const fake = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6Iu2Zjeq4uOuPmSIsImx2bCI6MSwiaWF0IjoxNzg2MDY0NDM4LCJleHAiOjE3ODYwNjgwMzh9.FLWBcc_s_I-nlZSnZ4cmBWm-jFzVRZbX3pyqUspq0RM';

try {
    const payload1 = jwt.verify(fake, secret);
    console.log('payload1 : ', payload1);
    
} catch (error) {
    console.error('위변조 토큰 거부 error : ', error.message);
    // 위변조 토큰 거부 error :  invalid signature
    //return res.statu(401).json({success : false, message : error.message}); 으로 보통 리턴해 준다.
}

