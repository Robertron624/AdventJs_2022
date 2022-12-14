function checkJump(heights) {
    const left = heights.splice(0, heights.indexOf(Math.max(...heights)))
    const conditionLeft = left
      .slice(1)
      .every((l, i) => l >= left[i])
    const conditionRight = heights
      .slice(1)
      .every((h, i) => h <= heights[i])
  
    return conditionLeft && conditionRight && !!left.length && heights.length > 1

}

// Crea un programa que compruebe que el trineo de Santa Claus hace una parabola al saltar entre ciudades. Recibes un array de números que representan la altura en la que se encuentra el trineo en cada momento.

// Para que la parabola sea correcta, el viaje del trineo debe ser ascendente al principio, llegar al punto más alto y descender hasta el final. No puede volver a subir una vez que ha bajado, ni puede iniciar el viaje bajando. Veamos unos ejemplos:


const heights1 = [1, 3, 8, 5, 2]
console.log(checkJump(heights1)) // true

const heights2 = [1, 7, 3, 5]
console.log(checkJump(heights2)) // false


console.log(checkJump([1, 2, 3])) // false never goes down