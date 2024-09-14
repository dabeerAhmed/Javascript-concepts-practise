const buttons = document.querySelectorAll(".button")

const body = document.querySelector("body")

buttons.forEach((button) => {
    button.addEventListener("click" , function(e){
        console.log(e)
        console.log(e.target)
        switch (e.target.id) {
            case "yellow":
                body.style.backgroundColor = e.target.id
                break;
            case "grey": 
                body.style.backgroundColor = e.target.id
                break;
            case "blue": 
                body.style.backgroundColor = e.target.id
                break;
            case "white": 
                body.style.backgroundColor = e.target.id
                break;
            default:
                break;
        }
    })
})

// We can also do this with loops

// buttons.forEach( (button) => {
//     button.addEventListener('mouseover', function(e){
//         console.log(button)
//         if (e.target.id === "yellow") {
//             body.style.backgroundColor = e.target.id
//         }
//         if (e.target.id === "white") {
//             body.style.backgroundColor = e.target.id
//         }
//         if (e.target.id === "blue") {
//             body.style.backgroundColor = e.target.id
//         }
//         if (e.target.id === "grey") {
//             body.style.backgroundColor = e.target.id
//         }
//     })
// })