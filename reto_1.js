function wrapping(gifts) {
  const wrappedGifts = [];

  gifts.map((gift) => {

    wrappingPaper = "*".repeat(gift.length + 2);

    wrappedGifts.push(`${wrappingPaper}\n*${gift}*\n${wrappingPaper}`);
  });

  return wrappedGifts;
}

const gifts = ["cat", "game", "socks"];
const wrapped = wrapping(gifts);

console.log(wrapped);
