function createCube(size) {

    let firstHalf = ""
    let secondHalf = ""
    let upperSpace = '_\\'.repeat(size)
    let lowerSpace = '_/'.repeat(size)

    let upperIterator = 1;
    let lowerIterator = size;

    while (upperIterator <= size && lowerIterator > 0) {
        let substringUpper = '/\\'.repeat(upperIterator) + upperSpace + '\n'
        substringUpper = ' '.repeat(lowerIterator - 1) + substringUpper

        firstHalf += substringUpper

        let substringLower = '\\/'.repeat(lowerIterator) + lowerSpace + '\n'
        substringLower = ' '.repeat(upperIterator -1 ) + substringLower
        secondHalf += substringLower

        upperIterator += 1
        lowerIterator -= 1
    }

    let finalString = (firstHalf + secondHalf).slice(0, firstHalf.length + secondHalf.length - 1);


  return finalString;
}




// console.log(createCube(1))


// console.log(createCube(2))

// console.log(createCube(3))