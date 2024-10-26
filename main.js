const upperCase = "QWERTYUIOPASDFGHJKLZXCVBNM";
const lowerCase = "qwertyuiopasdfghjklzxcvbnm";
const number = "0123456789";
const symbol = "!@#$%^&*}{][)(+=_-,.;<>:?/\\\"'";
let allChars = ""; 
const upperCaseChek = document.getElementById("uppercase");
const lowerCaseChek = document.getElementById("lowercase");
const numberChek = document.getElementById("numbers");
const symbolChek = document.getElementById("symbols");
let length = 5;
const passwordBox = document.getElementById("password");
let passwordType = document.querySelector(".pstype");
const rangeInput = document.getElementById("points");

function updateAllChars() {
    allChars = ""; 
    if (upperCaseChek.checked) allChars += upperCase;
    if (lowerCaseChek.checked) allChars += lowerCase;
    if (numberChek.checked) allChars += number;
    if (symbolChek.checked) allChars += symbol;
}

function updateValue() {
    let rangeValue = document.getElementById("points").value;
    let output = document.getElementById("lenghtCount");
    output.textContent = rangeValue;
    length = parseInt(rangeValue, 10);
    
   
   
    
    const min = rangeInput.min; 
    const max = rangeInput.max; 

   
    const percentage = ((rangeValue - min) / (max - min)) * 100;

   
    rangeInput.style.background = `linear-gradient(to right, #a4ffaf ${percentage}%, #100f15 ${percentage}%)`;
}


function updateStrengthIndicator() {
    const rectangles = document.querySelectorAll(".rectangle");
  

  
    const selectedTypes = [
        upperCaseChek.checked,
        lowerCaseChek.checked,
        numberChek.checked,
        symbolChek.checked
    ].filter(checked => checked).length;
  let strength = "";

    if (allChars.length === 0 || length < 6 || selectedTypes <= 0) {
        strength = "weak";
    } else if (length >= 6 && length < 10 && selectedTypes >= 1) {
        strength = "medium"; 
    } else if (length > 10 && selectedTypes >=3) {
        strength = "strong"; 
    } else if (length >= 6 && selectedTypes === 1) {
        strength = "mediumplus"; 
    } else if (length > 9 && selectedTypes >=2) {
        strength = "mediumplus"; 
    } else if (length >= 6 && selectedTypes === 2) {
        strength = "mediumplus"; 
    }


    rectangles[0].style.background = "#18171f";
    rectangles[1].style.background = "#18171f";
    rectangles[2].style.background = "#18171f";
    rectangles[3].style.background = "#18171f";

    
    if (strength === "weak") {
        passwordType.textContent="Weak"
        rectangles[0].style.background = "rgb(252, 20, 20)";
    } else if (strength === "medium") {
        passwordType.textContent="Medium"
        rectangles[0].style.background = "#f9cc64";
        rectangles[1].style.background = "#f9cc64";
    } else if (strength === "mediumplus") { 
        passwordType.textContent="Medium"
        rectangles[0].style.background = "#f9cc64";
        rectangles[1].style.background = "#f9cc64";
        rectangles[2].style.background = "#f9cc64";
    } else if (strength === "strong") {
        passwordType.textContent="Strong"
        rectangles[0].style.background = "greenyellow";
        rectangles[1].style.background = "greenyellow";
        rectangles[2].style.background = "greenyellow";
        rectangles[3].style.background = "greenyellow";
    }
  
}

const alertContainer = document.querySelector(".alert-container");
const alert = document.querySelector(".alert");

function closeAlert(){
    alert.classList.add("hidden");
    alertContainer.classList.add("hidden");
}
function createPassword() {
        
    updateValue();       
    updateAllChars();    
    
    if (allChars === "") { 
       
        if (alertContainer.classList.contains("hidden") && alert.classList.contains("hidden")) {
            alert.classList.remove("hidden");
            alertContainer.classList.remove("hidden");
            passwordBox.value = "password";
            return;
        }
    }

    let password = "";

    if (upperCaseChek.checked) password += upperCase[Math.floor(Math.random() * upperCase.length)];
    if (lowerCaseChek.checked) password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    if (numberChek.checked) password += number[Math.floor(Math.random() * number.length)];
    if (symbolChek.checked) password += symbol[Math.floor(Math.random() * symbol.length)];

    
    while (password.length < length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    passwordBox.value = password;
    passwordBox.style.color = "#e6e5e8";
    updateStrengthIndicator(); 
}
function copyPassword() {
    const rectangles = document.querySelectorAll(".rectangle");
    
    if (passwordBox.value !== "Password") {
        passwordBox.disabled = false; 
        passwordBox.select(); 
        document.execCommand("copy"); 
        
        passwordBox.value = "Password"; 
        passwordBox.style.color = "#525159"; 
        
     
        rectangles[0].style.background = "#18171f";
        rectangles[1].style.background = "#18171f";
        rectangles[2].style.background = "#18171f";
        rectangles[3].style.background = "#18171f";

            upperCaseChek.checked=true
            lowerCaseChek.checked=false
            numberChek.checked=false
            symbolChek.checked=false
      

        passwordType.textContent = " "; 
    }

}

