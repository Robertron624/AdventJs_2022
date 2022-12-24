function checkStepNumbers(systemNames, stepNumbers) {
    let myObj = {};

    for (let index = 0; index < systemNames.length; index++) {
        let systemName = systemNames[index];

        // if systemName is not inside the myObj object then added with
        // value an array with corresponding stepnumber inside
        if (!Object.keys(myObj).includes(systemName)) {
            myObj[systemName] = [stepNumbers[index]];
        } else {
            // Add the step number i to the system name array but before check if the current number
            // is lower than the previous
            if (stepNumbers[index] < myObj[systemName]) {
                return false;
            }
            myObj[systemName].push(stepNumbers[index]);
        }
    }

    return true;
}

// Verifica que todas las secuencias independientes de sistemas de iluminación navideña estén en orden estrictamente creciente. Tenemos dos arrays: systemNames y stepNumbers.

// systemNames contiene los nombres de los sistemas de iluminación navideña, y stepNumbers contiene los números de paso de cada sistema.

// Debemos verificar que los stepNumbers de cada sistema estén en orden estrictamente creciente. Si esto es cierto, devuelve true; de lo contrario, devuelve false.

// Por ejemplo:

const systemNames = ["tree_1", "tree_2", "house", "tree_1", "tree_2", "house"];
const stepNumbers = [1, 33, 10, 2, 44, 20];

console.log(checkStepNumbers(systemNames, stepNumbers)); // => true

// tree_1 tiene los pasos: [1, 2]
// tree_2 tiene los pasos: [33, 44]
// house tiene los pasos: [10, 20]

// true: Los pasos de cada sistema están en orden estrictamente creciente

console.log(checkStepNumbers(["tree_1", "tree_1", "house"], [2, 1, 10])); // => false

// tree_1 tiene los pasos: [2, 1]
// house tiene los pasos: [10]

// false: tree_1 tiene los pasos de forma decreciente

// Ten en cuenta que:

// La posición del nombre del sistema en systemNames y el número de paso en stepNumbers corresponden al mismo sistema.
// Los pasos en stepNumbers pueden repetirse para diferentes sistemas.

// Shorter function

// return systemNames.every(
//     (e, i) =>
//         stepNumbers[i] <=
//         stepNumbers[i + systemNames.slice(i + 1).indexOf(e) + 1]
// );
