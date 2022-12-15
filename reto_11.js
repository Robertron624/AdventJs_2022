function getCompleted(part, total) {

    const convertToSeconds = (time) => {
        let a = time.split(":");
        const seconds = (+a[0] * 60 * 60 + (+a[1]) * 60 + (+a[2]))

        return seconds
    }

    const calculateRatio = (num1, num2) => {
        for(let num=num2; num>1; num--) {
            if((num1 % num) == 0 && (num2 % num) == 0) {
                num1=num1/num;
                num2=num2/num;
            }
        }
        return num1 + "/" + num2;
    }

    let partSeconds = convertToSeconds(part);
    let totalSeconds = convertToSeconds(total);

    return calculateRatio(partSeconds, totalSeconds);
}

console.log(getCompleted('01:00:00', '03:00:00'))  // '1/3'
console.log(getCompleted('02:00:00', '04:00:00'))  // '1/2'
console.log(getCompleted('01:00:00', '01:00:00'))  // '1/1'
console.log(getCompleted('00:10:00', '01:00:00'))  // '1/6'
console.log(getCompleted('01:10:10', '03:30:30'))  // '1/3'
console.log(getCompleted('03:30:30', '05:50:50'))  // '3/5



 
 
 
 // '3/5

// Papa Noél está un poco preocupado porque los preparativos están llevando mucho tiempo. Hace poco se ha sacado una certificación de Scrum y ha decidido usar la metodología para organizar el trabajo de sus elfos.

// Le dicen la duración esperada de las tareas con un string con el formato hh:mm:ss y en el mismo formato cuánto tiempo llevan trabajando en ella.

// Pero Papa Noél no se entera rápidamente si falta o mucho para que termine, así que nos ha pedido que hagamos un programa que nos indique la porción de la tarea que ya se ha completado.

// Por ejemplo, si la tarea dura 03:00:00 y llevan trabajando 01:00:00 entonces ya han completado 1/3 de la tarea. En código:
