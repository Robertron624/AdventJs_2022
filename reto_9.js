function countTime(leds) {

    let count = 0;

   const changeLeds = (leds) => {
        leds.forEach((led, index, arr) =>{
            if(!led && arr[index - 1]){
                led = arr[1]
            }
        })
    }

        setInterval(()=>{
            count += 7;
            changeLeds(leds);

            if(leds.every((led) => led == 1)){
                clearInterval(count);
            }
        }, 7000)

        return count;

}

const leds = [0, 1, 1, 0, 1]

console.log(countTime(leds))
