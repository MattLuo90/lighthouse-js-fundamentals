function lastIndexOf(array, string){
  for(let i = array.length - 1 ; i >= 0; i --){
    if(string === array[i])
    return i;
  } return -1;
}
console.log(lastIndexOf([ 5,5,5,5,0], 5));
console.log(lastIndexOf([ 0,0,0,0,5,0], 5));
console.log(lastIndexOf([ 0,0,0,0,0 ], 1));

    

  
