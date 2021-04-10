function calculateRectangleArea(length, width){
  let area1 = length * width;
  if (area1 > 0){
  return area1;}
}
function calculateTriangleArea(base, height){
  area2 = base * height / 2;
  if(area2 > 0){
  return area2;
  }
}
function calculateCircleArea(radius){
  area3 = radius * radius * Math.PI
  if(radius > 0){
    return area3;
  }
  
}
console.log(calculateRectangleArea(10, 5));     // should print 50
console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
console.log(calculateRectangleArea(10, -5));    // should print undefined

console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined

console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1)); // should print undefined
