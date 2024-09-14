const form = document.querySelector('form')

form.addEventListener('submit', function(e){
    e.preventDefault()
    const height = parseInt(document.querySelector("#height").value)
    console.log(height)
    const weight = parseInt(document.querySelector("#weight").value)
    console.log(weight)
    const results = document.querySelector("#results")
    if (height === "" || height < 0 || isNaN(height)) {
        results.innerHTML = `please provide a valid height ${height}`
    } else if (weight === "" || weight < 0 || isNaN(weight)) {
        results.innerHTML = `please provide a valid weight ${weight}`
    } else {
        bmi = (weight / ((height * height) / 10000)).toFixed(2)
        // results.innerHTML = `<span>${bmi}</span>`
        if (bmi < 18.6) {
            results.innerHTML = `You are Underweight: ${bmi}`
        } else if(bmi>18.6 && bmi<24.9){
            results.innerHTML = `You are normal Weight: ${bmi}`
        } else {
            results.innerHTML = `You are overWeight: ${bmi}`
        }
    }
})