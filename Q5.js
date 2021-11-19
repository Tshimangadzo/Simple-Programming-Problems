let sumNumbers =(maxNum)=>{
    let sum = 0;
    for(let i = 1; i<= maxNum;i++){
        if(i%3 === 0 || i%2 === 0) sum +=i;
    }
 
  return sum
}
console.log(sumNumbers(5))