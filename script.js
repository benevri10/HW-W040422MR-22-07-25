const inputName = document.getElementById('name');
const inputAge = document.getElementById('age');
const inputColor = document.getElementById('color-fav');
const inputCountry = document.getElementById('country');
const inputMale = document.getElementById('male');
const inputFemale = document.getElementById('female');

const cardCon = document.getElementById ('cards-container')
const cardDiv = document.getElementById('card');
const cardName = document.getElementById('card-title');
const cardAge = document.getElementById('my-age');
const cardColor = document.getElementById('my-color');
const cardCountry = document.getElementById('my-country');
const cardGender = document.getElementById('my-gender');

function newCard(name, age, color,country, gender) {
    return `
    <div class="card" id="card" style="width: 18rem; background-color: yellow;">
          <div class="card-body">
            <h5 class="card-title" id="card-title">name: ${name}</h5>
            <h6 class="sec-title" id="my-age">age:${age}</h6>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item" id="my-color">color:${color} </li>
            <li class="list-group-item" id="my-country">country:${country} </li>
            <li class="list-group-item" id="my-gender">gender:${gender} </li>
          </ul>
        </div>
    `;

    
}

function getGender() {
    if (inputMale.checked) {
        return "male"
    }
    if (inputFemale.checked) {
        return "female"
    }
    
    return "";
};

function alert() {
    if (inputName.value.length < 2) {
        alert("this name not exist, fill again");
        return;
    } else if (inputAge.value <= 0) {
        alert("this age not exist, fill again");
        return;
    };


}

function handleButton() {



    const cardHtml = newCard(inputName.value, inputAge.value, inputColor.value, inputCountry.value, getGender());

    cardCon.innerHTML += cardHtml; 

    cardDiv.style.backgroundColor = inputColor.value;
    cardName.innerHTML = inputName.value;
    cardAge.innerHTML = inputAge.value;
    cardColor.innerHTML = inputColor.value;
    cardCountry.innerHTML = inputCountry.value;
    cardGender.innerHTML = getGender.value;
    
};



function resetButton() {
    inputName.value = "";
    inputAge.value = "";
    inputColor.value = "";
    inputCountry.value = "";
    cardDiv.style.backgroundColor = "";
    cardName.innerHTML = "";
    cardAge.innerHTML = "";
    cardColor.innerHTML = "";
    cardCountry.innerHTML = "";
    cardGender.innerHTML = "";
   

}