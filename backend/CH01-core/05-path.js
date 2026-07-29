// --------------------------------------------------------------------- //

const path = require('path');
const filename = __filename;

console.log(filename);
console.log('path.sep : ', path.sep);
console.log('path.delimiter : ', path.delimiter);
console.log('path.dirname() : ', path.dirname(filename)); // 현재경로
console.log('path.extname() : ', path.extname(filename)); // 확장자명
console.log('path.basename() : ', path.basename(filename)); // 현재 디렉토리 파일풀네임

console.log('path.basename() - extname() : ', '.js');
console.log('path.basename() - extname() : ', path.basename(filename, path.extname(filename)));
// path.basename(파일명, 제외할부분);
// ------function path.basename(path: string, suffix?: string): string
// ------Return the last portion of a path. Similar to the Unix basename command. Often used to extract the file name from a fully qualified path.

// --------------------------------------------------------------------- //
//객체만들기!!!!!
console.log('<< 객체 >>');
console.log('parse() : ', path.parse(filename));
console.log('format() : ', path.format(path.parse(filename)));

// --------------------------------------------------------------------- //
console.log('<< 경로조합 >>');
console.log('join() : ', path.join(__dirname, '..', 'womanup', 'a.txt'));
console.log('join() : ', path.join(__dirname, '..', 'kibwa'));
// --------function path.join(...paths: string[]): string
// --------Join all arguments together and normalize the resulting path.
// --------@param paths — paths to join.
// --------@throws — {TypeError} if any of the path segments is not a string.
// --------function path.join(...paths: string[]): string
// --------해석: 문자열 형태의 경로(string)들을 인자로 받아서, 하나의 문자열(string) 경로로 반환하는 함수입니다. (...paths는 여러 개의 인자를 가변적으로 받을 수 있음을 의미합니다.)
// --------Join all arguments together and normalize the resulting path.
// --------해석: 전달받은 모든 인자(arguments)를 하나로 결합하고, 그 결과로 나온 경로를 정규화(규격에 맞게 정리)합니다.
// --------@param paths — paths to join.
// --------해석: @param paths — 서로 연결할 경로들입니다.
// --------@throws — {TypeError} if any of the path segments is not a string.
// --------해석: @throws — 전달된 경로 조각 중 단 하나라도 문자열(string)이 아닌 경우 TypeError 에러를 발생시킵니다.

console.log('web resolve : ', path.resolve(__dirname, '..', '/web'));
console.log('ios resolve : ', path.resolve(__dirname, '..', '/ios'));
// ---- C:\web
// ---- C:\ios --> '/ios' root라 판단

console.log('web resolve : ', path.resolve(__dirname, '..', 'web'));
console.log('ios resolve : ', path.resolve(__dirname, '..', 'ios'));
// ---- web resolve :  C:\Users\user\Documents\GitHub\react_2026\backend\web
// ---- ios resolve :  C:\Users\user\Documents\GitHub\react_2026\backend\ios

console.log('path.posix.sep : ', path.posix.sep);
console.log('path.win32.sep : ', path.win32.sep);
console.log('posix join() : ', path.posix.join(__dirname, 'kibwa'));
console.log('win32 join() : ', path.win32.join(__dirname, 'kibwa'));
// ---- posix join() :  C:\Users\user\Documents\GitHub\react_2026\backend\CH01-core/kibwa
// ---- win32 join() :  C:\Users\user\Documents\GitHub\react_2026\backend\CH01-core\kibwa


// --------------------------------------------------------------------- //
console.log('<< 상대경로 >>');
console.log('isAbsolute() : ', path.isAbsolute(filename));
console.log('relative() : ', path.relative(__dirname, path.join(__dirname, '..')));

// --------------------------------------------------------------------- //
console.log('<< OS별 강제지정 >>');
console.log('isAbsolute() : ', path.isAbsolute(filename));
console.log('relative() : ', path.relative(__dirname, path.join(__dirname, '..')));









// --------------------------------------------------------------------- //





// --------------------------------------------------------------------- //