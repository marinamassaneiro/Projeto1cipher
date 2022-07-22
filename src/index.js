import cipher from './cipher.js';

let buttonEncode = document.querySelector("#buttonEncode");
buttonEncode.addEventListener ("click", messageEncode);

function messageEncode () {
    let wordEncode = document.querySelector("#wordEncode").value;
    let numberEncode = document.querySelector("#numberEncode").value;

    if (wordEncode == "" || numberEncode == "")  {
        alert ("Você precisa selecionar o número e escrever sua mensagem");
    } else {
        let encoded = cipher.encode (wordEncode,numberEncode);
        let resultEncode = document.querySelector("#resultEncode");
        resultEncode.innerHTML = encoded;
    }
}


let buttonDecode = document.querySelector("#buttonDecode");
buttonDecode.addEventListener ("click", messageDecode);

function messageDecode () {
    let wordDecode = (document.querySelector("#wordDecode").value);
    let numberDecode = (document.querySelector("#numberDecode").value);

    if (wordDecode == "" || numberDecode == "")  {
        alert ("Você precisa selecionar o número e escrever sua mensagem");
    } else {
        let decoded = cipher.decode (wordDecode,numberDecode);
        let resultDecode = document.querySelector("#resultDecode");
        resultDecode.innerHTML = decoded;
    }
}
console.log(cipher);