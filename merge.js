function merge(x, y){
  for(i = 0 ; i < y.length ; i++){
    x.push(y[i]);
    x.sort();
  }
    return x;
}
console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]))
