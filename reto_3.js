function distributeGifts(packOfGifts, reindeers) {
    let totalGiftsWeight = 0;
    let maxReindeerWeight = 0;

    packOfGifts.map((gift) => {
        totalGiftsWeight += gift.length;
    })


    reindeers.map((reindeer) => {
        maxWeigthSupportedByReindeer = reindeer.length * 2;
        maxReindeerWeight += maxWeigthSupportedByReindeer;
    })


    return Math.floor(maxReindeerWeight / totalGiftsWeight)
}


const packOfGifts = ["book", "doll", "ball"]
const reindeers = ["dasher", "dancer"]


console.log(distributeGifts(packOfGifts, reindeers)) //  -> 2
