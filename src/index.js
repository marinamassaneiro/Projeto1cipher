import cipher from './cipher.js';

let buttonEncode = document.querySelector("#buttonEncode");
buttonEncode.addEventListener ("click", messageEncode);

function messageEncode () {
    let wordEncode = document.querySelector("#wordEncode").value;
    let numberEncode = document.querySelector("#numberEncode").value;

    try {
        let encoded = cipher.encode (numberEncode, wordEncode);
        let resultEncode = document.querySelector("#resultEncode");
        resultEncode.innerHTML = encoded + "(" + numberEncode + ")";
    } catch (error) {
        alert (error.message)
    }
}


let buttonDecode = document.querySelector("#buttonDecode");
buttonDecode.addEventListener ("click", messageDecode);

function messageDecode () {
    let wordDecode = (document.querySelector("#wordDecode").value);
    let numberDecode = (document.querySelector("#numberDecode").value);

    try {
        let decoded = cipher.decode (numberDecode, wordDecode);
        let resultDecode = document.querySelector("#resultDecode");
        resultDecode.innerHTML = decoded;
    } catch (error) {
        alert (error.message)   
    }
}

console.log(cipher);