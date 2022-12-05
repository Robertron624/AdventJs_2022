function fitsInOneBox(boxes) {

    let canFit = false;

    let biggestBox = {
        l: 0,
        w: 0,
        h: 0
    }

    boxes.map((box) => {
        
        if(box.l > biggestBox.l || box.w > biggestBox.w || box.h > biggestBox.h){
            biggestBox = box
        }
    })

    console.log('biggestBox: ', biggestBox)

    boxes.forEach((box) => {
        if(box != biggestBox){
            if(biggestBox.l > box.l && biggestBox.w > box.w && biggestBox.h > box.h){
                canFit = true
            }
            else{
                canFit = false
            }
        }
    })

    return canFit
}


const test1 = [
    { l: 1, w: 1, h: 1 },
    { l: 2, w: 2, h: 2 }
]

const test2 = [ 
    { l: 1, w: 1, h: 1 },
    { l: 2, w: 2, h: 2 },
    { l: 3, w: 1, h: 3 }
]

const test3 = [ 
    { l: 1, w: 1, h: 1 },
    { l: 3, w: 3, h: 3 },
    { l: 2, w: 2, h: 2 }
]

const test4 = [
  { l: 1, w: 1, h: 10 },
  { l: 3, w: 3, h: 12 },
  { l: 2, w: 2, h: 1 },
]

// console.log(fitsInOneBox(test1)) // true
// console.log(fitsInOneBox(test2)) // false
// console.log(fitsInOneBox(test3)) // true
console.log(fitsInOneBox(test4)) // false
