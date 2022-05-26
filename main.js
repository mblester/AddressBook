
fetch("https://randomuser.me/api/?results=10")
.then(function(response){
    console.log("response status", response.status)
    return response.json();
}).then(function(json){
    console.log("response payload:", json)
    processJson(json)
})

let processContact = function(contact) {
    
    let fullName = `${contact.name.last}, ${contact.name.first}`;
    console.log(`Name Last, First: ${fullName}`)
    let pic = contact.picture.thumbnail;
    let email = contact.email;
    let streetAddress = `${contact.location.street.number} ${contact.location.street.name}`;
    let cityState = `${contact.location.city} ${contact.location.state} ${contact.location.postcode}`;
    let country = contact.location.country;

  
    let li = document.createElement("li")
    document.getElementById('ul').appendChild(li);
    let div = document.createElement("div")
    li.appendChild(div)
    let nameP = document.createElement("p")
    nameP.classList.add("name")
    nameP.innerText = fullName
    div.appendChild(nameP)

    

    let divTwo = document.createElement("div")
    li.appendChild(divTwo)
    
    picImg = document.createElement("img")
    picImg.classList.add("pic")
    picImg.src = pic
    divTwo.appendChild(picImg)


    emailP = document.createElement("p")
    emailP.classList.add("email")
    emailP.innerText = email
    divTwo.appendChild(emailP)

    streetP = document.createElement("p")
    streetP.classList.add("street")
    streetP.innerText = streetAddress
    divTwo.appendChild(streetP)

    cityStateP = document.createElement("p")
    cityStateP.classList.add("cityState")
    cityStateP.innerText = cityState
    divTwo.appendChild(cityStateP)

    countryP = document.createElement("p")
    countryP.classList.add("country")
    countryP.innerText = country
    divTwo.appendChild(countryP)

    divTwo.className = "noDisplay"


    

    li.addEventListener("click", function(){
        divTwo.classList.toggle("noDisplay")

    })
   
}

processJson = function(json) {
    console.log(json.results[0].name.first)
    for (let i=0; i< json.results.length; i++ ) {
        console.log(json.results[i].name.first)
        let contact = json.results[i]
        processContact(contact);
    }
}