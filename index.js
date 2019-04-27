var form = document.travelForm

form.submit.addEventListener("click", function(e){
    e.preventDefault()
    var dietArray = []
    if (form.vegetarian.checked){
        dietArray.push("Vegetarian")
    }
    if (form.lactose.checked){
        dietArray.push("Lactose")
    }
    if (form.peanut.checked){
        dietArray.push("Peanut")
    }
    if (form.kosher.checked){
        dietArray.push("Kosher")
    }    
    console.log(dietArray);
    alert(`
    First Name: ${form.firstName.value}
    Last Name: ${form.lastName.value}
    Age: ${form.age.value}
    Gender: ${form.gender.value}
    Destination: ${form.locale.value}
    Dietary restrictions: ${dietArray.join(", ")}
    `)
})