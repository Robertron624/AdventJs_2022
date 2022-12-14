function checkJump(heights) {

    let heightestPoint = Math.max(...heights);

    let goingDown = false;


    for(let [index, height] of heights.entries()) {
        if(height == heightestPoint) goingDown = true;

        if(goingDown && heights[index + 1] > height) {
            return false;
        }

        if(!goingDown && heights[index + 1] < height) {
            return false;
        }

        if(height == heightestPoint && heights[index + 1] == undefined){
            return false;
        }
    }

    if(!goingDown){
        return false;
    }

    return true;
}

// Crea un programa que compruebe que el trineo de Santa Claus hace una parabola al saltar entre ciudades. Recibes un array de números que representan la altura en la que se encuentra el trineo en cada momento.

// Para que la parabola sea correcta, el viaje del trineo debe ser ascendente al principio, llegar al punto más alto y descender hasta el final. No puede volver a subir una vez que ha bajado, ni puede iniciar el viaje bajando. Veamos unos ejemplos:


const heights1 = [1, 3, 8, 5, 2]
console.log(checkJump(heights1)) // true

const heights2 = [1, 7, 3, 5]
console.log(checkJump(heights2)) // false


console.log(checkJump([1, 2, 3])) // false never goes down