function fitsInOneBox(boxes) {

    return boxes.sort((a, b) => a.l - b.l).every((box, index) => {
        if (index === boxes.length - 1) return true;
        const cajaSig = boxes[index+1];
        const nextBox = box.l < cajaSig.l && box.w < cajaSig.w && box.h < cajaSig.h
        return nextBox;
    })
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
