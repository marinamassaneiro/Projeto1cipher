import cipher from './cipher.js';

let buttonEncode = document.querySelector("#buttonEncode");
buttonEncode.addEventListener ("click", messageEncode);

function messageEncode () {
    let offsetEncode = parseInt (document.querySelector("#offsetEncode").value);
    let wordEncode = document.querySelector("#wordEncode").value;
    let resultEncode = document.querySelector("#resultEncode");
    resultEncode.innerHTML = cipher.encode (offsetEncode, wordEncode) + "(" + offsetEncode + ")";
}

let buttonDecode = document.querySelector("#buttonDecode");
buttonDecode.addEventListener ("click", messageDecode);

function messageDecode () {
    let offsetDecode = parseInt (document.querySelector("#offsetDecode").value);
    let wordDecode = (document.querySelector("#wordDecode").value);  
    let resultDecode = document.querySelector("#resultDecode");
    resultDecode.innerHTML = cipher.decode (offsetDecode, wordDecode);
}

console.log(cipher);