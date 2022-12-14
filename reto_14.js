function getOptimalPath(path) {
    let result = path.reduceRight((prev, current) => {
        return current.map((value, index) => {
            return value + Math.min(prev[index], prev[index + 1]);
        });
    });

    return result[0];
}

console.log(getOptimalPath([[0], [7, 4], [2, 4, 6]]));
console.log(getOptimalPath([[0], [2, 3]])); // -> 2 ; 0 ->  0 -> 2
console.log(getOptimalPath([[0], [3, 4], [9, 8, 1]])); // -> 5; 0 -> 4 -> 1
console.log(getOptimalPath([[1], [1, 5], [7, 5, 8], [9, 4, 1, 3]])); // -> 8; 1 -> 1 -> 5 -> 1

//   Santa Claus está construyendo pirámides de hielo en el Polo Norte para entrenar a sus renos.

// Cada reno comienza en la cima de la pirámide y debe elegir el camino óptimo hacia abajo para recorrerlo en el menor tiempo posible. Cada nivel tiene un número que determina el tiempo que necesita para llegar ahí.

// Al llegar a una posición, el reno solo puede deslizarse hacia abajo y en diagonal hacia la izquierda o la derecha. Visualmente, la pirámide se ve así:

//     0
//    / \
//   7   4
//  / \ / \
// 2   4   6
// En código la representamos así:

// [
// [0],
// [7, 4],
// [2, 4, 6]
// ]

// Santa Claus necesita un programa que le dice cuál es el tiempo mínimo que puede tomar cada reno para deslizarse por la pirámide usando el camino más óptimo.

// En el ejemplo anterior, el camino más óptimo es 0 -> 4 -> 4, que toma un total de 0 + 4 + 4 = 8 unidades de tiempo. El resultado sería: 8.

// ¿Por qué no es 6? No es 0 -> 4 -> 2 porque al bajar a la posición del 4 ya no puede diagonalmente llegar a la posición del 2. Así que el camino más corto posible es 8. Más ejemplos:
