const strURL ='http://wizard113:password@apis.womanup.co.kr:8080/path1/path2?serviceKey=key&base_date=20240407&dataType=JSON&numberOfRows=10&pageNo=1&category=api&category=geo';

const urls = new URL(strURL); 

console.log('protocol: ', urls.protocol); // 'http:'
console.log('host: ', urls.host); // 'apis.womanup.co.kr:8080'
console.log('hostname: ', urls.hostname); // 'apis.womanup.co.kr'
console.log('port: ', urls.port); // '8080'
console.log('username: ', urls.username); // 'wizard113'
console.log('password: ', urls.password); // 'password'
console.log('pathname: ', urls.pathname); // '/path1/path2'
console.log('search: ', urls.search); // '?serviceKey=key&...'
console.log('category 전체: ', urls.searchParams.getAll('category')); // ['api', 'geo']