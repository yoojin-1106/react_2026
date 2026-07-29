// --------------------------------------------------------------------- //
console.log('version : ', process.version); // Node 버전 확인
console.log('arch : ', process.arch);   // CPU 아키텍쳐 확인
console.log('platform : ', process.platform); // 운영체제 확인
console.log('pid : ', process.pid); // process id
console.log('cwd() : ', process.cwd()); // 실행위치 working diretory
console.log('uptime() : ', process.uptime()); // 프로세스 구동 시간
console.log('memoryUsage() : ', process.memoryUsage()); //할당메모리

// --------------------------------------------------------------------- //
console.log('argv : ', process.argv); // argv
console.log('argv slice 사용인자 : ', process.argv.slice(2)); // argv
// 실행인자를 조회할때 주로 사용된다. argument : 프로그래밍: 함수를 호출할 때 전달하는 인자 / 전달인자

// --------------------------------------------------------------------- //
console.log('NODE_ENV : ', process.env.NODE_ENV || '(설정안됨)'); 
console.log('HOME : ', process.env.HOME || process.env.USERPROFILE);
// .env 환경변수 주입시 자주 사용한다.

// --------------------------------------------------------------------- //