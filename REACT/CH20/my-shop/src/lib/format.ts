export function formatPrice(won : number) : string {
    return `${won.toLocaleString('ko-KR')}원`
}

// ko-KR ==>  ko : 한국어, KR:대한민국, ->  3000 : 3,000로 변환 .toLocaleString
