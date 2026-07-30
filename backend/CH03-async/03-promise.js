const promise = new Promise((resolve, reject) => {
    const success = true;
    if(success){
         resolve('성공');
    }else{
         reject('실패');
    }
});

promise
    .then((result) => {
        console.log('성공결과 result : ', result);
    })
    .catch((error) => {
        console.log('에러 error : ', error);
    });

    // pending상태는 결과값이 없는경우로 판단한다.
