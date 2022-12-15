function decorateTree(base) {
    
    const dict = {
        "PP": "P",
        "BB": "B",
        "RR": "R",
        "BP": "R",
        "PB": "R",
        "BR": "P",
        "RB": "P",
        "PR": "B",
        "RP": "B"
      }
    
      base = base.split(" ")
      console.log("base: " + base)
      let list = new Array(base.length - 1).fill(base)
      console.log("list: " + list)

      return list.reduce((total, x) =>
        total.concat(
          [new Array(total.at(-1).length - 1).fill("-").map((_, i) => {
            return dict[total.at(-1).slice(i, i + 2).join("")]
          }).flat()]
        )
        , [base]).slice(0, base.length).map(x => x.join(" ")).reverse()
}



// Una pareja está poniendo el árbol de navidad. El chico es un motivado de los adornos navideños y quiere que quede perfectamente equilibrado. Tiene tres tipos de decoraciones:

// Bolas de colores : B
// Regalos pequeños : R
// Piñas de pino : P
// El árbol de navidad es un triángulo que hay que generar. Ya tienen la base montada, que sería la primera fila, y a partir de ahí tienen que ir colocando las decoraciones hacía arriba siguiendo una fórmula.

// Arriba coloca  :     P     R     B     P
// Si abajo tiene :    P P   B P   R P   B R
// Las combinaciones también son al revés. Por ejemplo, si abajo es B P, arriba es R. Pero también será R si abajo es P B. También si abajo tienes dos veces la misma letra, arriba será la misma letra. Por ejemplo, si abajo es B B, arriba es B.

// Con estas reglas, podríamos ver el árbol que generaríamos con la base B P R P:
console.log(decorateTree('B P R P'))

// [
// 'R',
// 'P B',
// 'R B B',
// 'B P R P'
// ]

//    R
//   P B
//  R B B
// B P R P

console.log(decorateTree('B B')) // ['B', 'B B']