import cipher from './cipher.js';

let buttonEncode = document.querySelector("#buttonEncode");
buttonEncode.addEventListener ("click", messageEncode);

function messageEncode () {
    let chosenWordEncode = document.querySelector("#wordEncode").value;
    let chosenNumberEncode = document.querySelector("#numberEncode").value;
    let numberEncode = parseInt (chosenNumberEncode);

    let encoded = cipher.encode (chosenWordEncode,numberEncode);
    let resultEncode = document.querySelector("#resultEncode");
    resultEncode.innerHTML = encoded;
}


let buttonDecode = document.querySelector("#buttonDecode");
buttonDecode.addEventListener ("click", messageDecode);

function messageDecode () {
    let chosenWordDecode = (document.querySelector("#wordDecode").value);
    let chosenNumberDecode = (document.querySelector("#numberDecode").value);
    let numberDecode = parseInt (chosenNumberDecode);

    let decoded = cipher.decode (chosenWordDecode,numberDecode);
    let resultDecode = document.querySelector("#resultDecode");
    resultDecode.innerHTML = decoded;
}

console.log(cipher);