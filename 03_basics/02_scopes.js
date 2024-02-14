// var c = 300
let a = 400
if (true) {
    let a = 10
    const b = 20
    console.log("Inner : ",a);
}
console.log("Outer : ", a);
// console.log(b);
// console.log(c);


// interview question : global scope is different in windows and node.