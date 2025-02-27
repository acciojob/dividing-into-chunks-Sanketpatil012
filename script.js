const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  let result = [] 
  let subArray= []

 let  currentSum=0; 
  
  for(let num of arr){
    if(currentSum + num <= n){
		subArray.push(num)
		currentSum+=num
	}else{
		 result.push(subArray)
		 subArray=[num] 
		currentSum=num
		 
	}
  }
	if(subArray.length >  0){
		result.push(subArray)
	}
	 return result 
};

//const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
