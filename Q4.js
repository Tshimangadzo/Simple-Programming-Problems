let sumNumbers =(maxNum)=>{
    let sum = 0;
    for(let i = 1; i<= maxNum;i++) sum +=i;
  return sum
}
console.log(sumNumbers(10000))