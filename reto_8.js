function checkPart(part) {

    let result = false;

    let reversedString = part.split("").reverse().join("");

    if(part === reversedString) return true;


    for(let i = 0; i < part.length; i++) {


        const halfBeforeEle = part.slice(0, i);

        const halfAfterEle = part.slice((i + 1));

        const newArray = halfBeforeEle.concat(halfAfterEle)

        const reversedNewArray = newArray.split("").reverse().join("");

        if((reversedNewArray == newArray) == true){
            result = true;
            break;
        }
    }

  return result;
}

// const a = checkPart("uwu"); // true
// "uwu" es un palíndromo sin eliminar ningún carácter

// const b= checkPart("miidim"); // true
// "miidim" puede ser un palíndromo después de eliminar la primera "i"
// ya que "midim" es un palíndromo

// const c = checkPart("midu"); // false
// "midu" no puede ser un palíndromo después de eliminar un carácter


console.log(checkPart("uwu"))  // -> true
console.log(checkPart("miidim")) // -> true
console.log(checkPart("midu")) // -> false