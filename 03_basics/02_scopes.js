var c = 300
let a = 400
if (true) {
    let a = 10
    const b = 20
    // console.log("Inner : ",a);
    // var c= 17
    // console.log(c)
}
// console.log("Outer : ", a);
// console.log(b);
// console.log(c);


// interview question : global scope is different in windows and node.


function one(){
    const username = "Dabeer Ahmed"

    function two(){
        const website = "db-portfolio"
        console.log(username)
    }
    // console.log(website)
    two()
}
one()


if (true) {
    const username = "Dabeer"
    if (username === "Dabeer"){
        const website = " db-port"
        // console.log(username + website)
    }
}



// +++++++++++++++++++++++++++++ intresting ++++++++++++++++++++++++++++++
// The below concept is called hoisting in javascript


console.log(addone(5))
function addone(num){
    return num + 1
}


// console.log(addTwo(5))
const addTwo = function(num){
    return num + 2
}
