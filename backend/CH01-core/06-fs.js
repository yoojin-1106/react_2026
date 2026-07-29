// --------------------------------------------------------------------- //

const fs = require('fs');
console.log(fs);

fs.readFile('./test.txt', function(err, data){
    if(err){
        throw err;
    }
    console.log(data);
    console.log(data.toString());

});

fs.writeFile('./test_write.txt', '파일쓰기 테스트입니다.', function(err){
    if(err){
        throw err;
    }
    console.log('파일쓰기 성공');

})