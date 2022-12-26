function canExit(maze) {
    const replace = (str) => {
        return str
            .replace(/[S][\sE]/g, "SS")
            .replace(/[\sE][S]/g, "SS")
            .split("");
    };

    let myArr = [];

    new Array(maze[0].length * maze.length).fill(0).forEach(() => {
        let check = [...maze];
        maze.map((horizontal, i) => {
            maze[i] = replace(horizontal.join(""));
            let v = maze[0].map((_, i) => replace(maze.map((x) => x[i]).join("")));
            maze[i] = v.map((x) => x[i]);
        });
        check.flat().join("") == maze.flat().join("") && myArr.push(check);
    })

    return !myArr.flat(2).includes("E");
}

//   Ha llegado el día! Hoy vamos a repartir los regalos… pero los almacenes son un labertinto y los elfos están perdidos.

//   Indielfo Jones quiere escribir un programa que al recibir una matriz, sepa si puede salir o no del laberinto rápidamente desde su entrada a la salida.

//   Los laberintos tienen las siguientes posiciones:

//   W: Es una pared, no se puede pasar por ahí.
//   S: Punto de entrada al almacén.
//   E: Punto de salida del almacén.
//   : Los espacios en blanco es por donde se puede pasar.
//   Los movimientos válidos son de una posición hacia arriba, abajo, izquierda o derecha. No se puede mover en diagonal.

let a = canExit([
    [" ", " ", "W", " ", "S"],
    [" ", " ", " ", " ", " "],
    [" ", " ", " ", "W", " "],
    ["W", "W", " ", "W", "W"],
    [" ", " ", " ", " ", "E"],
]); // -> true

// Se puede salir porque empezamos en [0, 4]
// y hay un camino hasta la salida que es [4, 4]

let b = canExit([
    [" ", " ", "W", "W", "S"],
    [" ", " ", " ", "W", " "],
    [" ", " ", " ", "W", " "],
    ["W", "W", " ", "W", "W"],
    [" ", " ", " ", " ", "E"],
]); // -> false

// No hay manera de llegar de [0, 4] a [4, 4]
//   Recuerda que:

//   Sólo tienes que devolver si se puede salir del laberinto con un booleano.
//   Las paredes W no se pueden saltar.
//   No se pueden salir de los límites de la matriz, siempre hay que seguir un camino interno.

console.log(a)
console.log(b)