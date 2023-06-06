let text = document.querySelector("textarea");

// Turns the text into upper case
let upperCase = document.getElementById("upper-case");
upperCase.addEventListener("click", function () {
    text.value = text.value.toUpperCase();
});

// Turns the text into lower case.
let lowerCase = document.getElementById("lower-case");
lowerCase.addEventListener("click", function() {
    text.value = text.value.toLowerCase();
})

// Turns the text into proper case.
let properCase = document.getElementById("proper-case");
properCase.addEventListener("click", function () {
    text.value = text.value.toLowerCase();
    let originalText = text.value;
    let capitalizeText = "";
    capitalizeText += originalText.charAt(0).toUpperCase();

    for(let i = 1; i < originalText.length; i++){
        if(originalText.charAt(i) === " ") {
            capitalizeText += " " + originalText.charAt(i + 1).toUpperCase();
            i++;
        } else {
            capitalizeText += originalText.charAt(i);
        }
    }
    text.value = capitalizeText;
})

// Turns the text into sentence case.
let sentenceCase = document.getElementById("sentence-case");
sentenceCase.addEventListener("click", function () {
    text.value = text.value.toLowerCase();
    let originalText = text.value;
    let capitalizeText = "";
    capitalizeText += originalText.charAt(0).toUpperCase();

    for(let i = 1; i < originalText.length; i++){
        if(originalText.charAt(i) === ".") {
            if(i + 1 === originalText.length) {
                capitalizeText += "." + originalText.charAt(i + 2).toUpperCase();
            } else {
                capitalizeText += ". " + originalText.charAt(i + 2).toUpperCase();
                i += 2;
            }
        } else {
            capitalizeText += originalText.charAt(i);
        }
    }
    text.value = capitalizeText;
})

// Saves textarea value into a txt file.
let saveTextFile = document.getElementById("save-text-file");
saveTextFile.addEventListener("click", function() {
    let fileName = prompt("File name: ");
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURI(text.value));
    element.setAttribute('download', fileName);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
})