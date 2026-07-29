// --------------------------------------------------------------------- //
const os = require('os');


console.log(' << 운영체제정보 >> '); 
console.log('os.arch() : ', os.arch());   // CPU 아키텍쳐 확인
console.log('os.platform() : ', os.platform()); // 운영체제 확인
console.log('os.type() : ', os.type()); // 
console.log('os.release() : ', os.release()); // 커널버전
console.log('os.hostname() : ', os.hostname()); // 컴퓨터이름
console.log('os.uptime() : ', os.uptime(), '초'); // 시스템 부팅 후 경과 시간
console.log('os.EOL() : ', JSON.stringify(os.EOL)); // 줄바꿈 문자 (\n, \r\n)

console.log(' <<  경로정보 >> '); 
console.log('os.homedir() : ', os.homedir()); //home directory
console.log('os.tmpdir() : ', os.tmpdir()); // 임시 directory

console.log(' <<  CPU정보 >> '); 
console.log('os.cpus() : ', os.cpus().length); // 임시 directory






// --------------------------------------------------------------------- //