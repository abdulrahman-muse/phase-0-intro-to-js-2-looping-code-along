function writeCards(namesArray, event){
let newArray = []
  for(let i = 0; i < namesArray.length; i++){
    newArray.push(`Thank you, ${namesArray[i]}, for the wonderful ${event} gift!`)
  }
  return newArray
}

function countDown(startingNumber){
  while(startingNumber > 0){
  console.log(startingNumber)
  startingNumber -= 1;
  }
  console.log(startingNumber)
}
