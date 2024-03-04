const myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

const myCreatedDate1 = new Date(21, 2, 2023)
const myCreatedDate2 = new Date(21, 2, 2023, 5, 3)
const myCreatedDate3 = new Date("2023-01-9")
// console.log(myCreatedDate3.toLocaleString())


const myTimestamp = Date.now()
// console.log(myTimestamp)
// console.log(myCreatedDate3.getTime())
// console.log(Math.floor((Date.now())/1000))

let newDate = new Date();
// console.log(newDate);
// console.log(newDate.getDay());
// console.log(newDate.getMonth()+1);

// `The date today is ${newDate.getDay()} and the time is ${}`      this is how you can return in your wordings by the help of string interpolation


console.log(newDate.toLocaleString('default', {            //This is how you can customize your date accordingly
    weekday: "long",
}))