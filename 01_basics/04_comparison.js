// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2==1);
// console.log(2!=1);

// console.log("2" > 1)
// console.log("02" > 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);
// The reason is that javascript treat equality checks == and comparison checks >,<,>=,<= differently. Comparison converts null to a number treating it as 0 hence therefore null >= 0 is true and null > 0 is false;

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);