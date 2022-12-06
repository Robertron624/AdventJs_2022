function getMaxGifts(giftsCities, maxGifts, maxCities) {

    let maxSum = 0;

    giftsCities.map((gift, index) => {
        let temp = [];
        let substring = giftsCities.slice(index + 1, giftsCities.length)
        temp.push(gift)
        substring.map((subGift, index) => {
            if((gift + subGift <= maxGifts) && temp.length < maxCities){
                temp.push(subGift)
            }
        })
        let sum = temp.reduce((acc, item) => acc + item)
        if(sum > maxSum && sum <= maxGifts){
            maxSum = sum
        }
    })


  return maxSum;
}

console.log(getMaxGifts([12, 3, 11, 5, 7], 20, 3)); // 20
console.log(getMaxGifts([50], 15, 1)); // 0
console.log(getMaxGifts([50], 100, 1)); // 50
console.log(getMaxGifts([50, 70], 100, 1)); // 70
console.log(getMaxGifts([50, 70, 30], 100, 2)); // 100
console.log(getMaxGifts([50, 70, 30], 100, 3)); // 100
console.log(getMaxGifts([50, 70, 30], 100, 4)); // 100
