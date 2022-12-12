function countTime(leds) {
  let result = 0;

  const checkIfAllLedsAreOn = (leds) => {
    return leds.every((led) => led === 1);
  };

  let areLedsOn = checkIfAllLedsAreOn(leds);

  while (areLedsOn == false) {

    let copy = [];

    for(let i = 0; i < leds.length; i++) {
        const current = leds[i];
        const previous = leds[i - 1] != undefined ? leds[i - 1] : leds.slice(-1);
        
        if (current == 0 && previous == 1) {
            copy.push(1);
        }
        else{
            copy.push(current);
        }
    }
    areLedsOn = checkIfAllLedsAreOn(leds);
    if(areLedsOn) break;
    leds = copy;
    result += 7;
  }

  return result;
}

const leds = [0, 1, 1, 0, 1];
// countTime(leds); // 7
// 7 segundos ya que en el primer cambio
// todas las luces se encendieron
// 0s: [0, 1, 1, 0, 1]
// 7s: [1, 1, 1, 1, 1]

// countTime([0, 0, 0, 1]); // 21
// 21 segundos ya que necesita tres cambios:
// 0s: [0, 0, 0, 1]
// 7s: [1, 0, 0, 1]
// 14s: [1, 1, 0, 1]
// 21s: [1, 1, 1, 1]

// countTime([0, 0, 1, 0, 0]); // 28
// 28 segundos ya que necesita cuatro cambios:
// 0s: [0, 0, 1, 0, 0]
// 7s: [0, 0, 1, 1, 0]
// 14s: [0, 0, 1, 1, 1]
// 21s: [1, 0, 1, 1, 1]
// 28s: [1, 1, 1, 1, 1]

console.log(countTime([1, 1, 1, 1, 1])); // -> 0 all are on
console.log(countTime([0, 1, 1, 0, 1])); // -> 7
console.log(countTime([0, 0, 0, 1])); // -> 21
console.log(countTime([0, 0, 1, 0, 0])) // -> 28
