const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase = "abcdefghijklmnopqrstuvwxyz"
const numberSet = "1234567890"
const symbolSet = "~!@#$%^&*()_+/"




const passBox = document.getElementById("pass-box")
const totalCharInput = document.getElementById('total-char');
const upperCaseCheckbox = document.getElementById('upper-case');
const lowerCaseCheckbox = document.getElementById('lower-case');
const numbersCheckbox = document.getElementById('numbers');
const symbolsCheckbox = document.getElementById('symbols');
const generateButton = document.getElementById('btn');


const getRandomData = (dataset) => {
    return dataset[Math.floor(Math.random() * dataset.length)]
}

const generatePassword = (password = "") => {
    if(upperCaseCheckbox.checked) {
        password += getRandomData(upperCase)
    }
    if(lowerCaseCheckbox.checked) {
        password += getRandomData(lowerCase)
    }
    if(numbersCheckbox.checked) {
        password += getRandomData(numberSet)
    }
    if(symbolsCheckbox.checked) {
        password += getRandomData(symbolSet)
    }
    if(password.length < totalCharInput.value) {
        return generatePassword(password)

    }

    passBox.innerText = truncateString(password,totalCharInput.value)

}


generateButton.addEventListener('click',()=> {
    generatePassword()
})


function truncateString(str, num) {
    if (str.length > num){
        let subStr = str.substring(0,num);
        return subStr;
    } else{
        return subStr;
    }
  
  }