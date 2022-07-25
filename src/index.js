import cipher from './cipher.js';

let buttonEncode = document.querySelector("#buttonEncode");
buttonEncode.addEventListener ("click", messageEncode);

function messageEncode () {
    let offsetEncode = document.querySelector("#offsetEncode").value;
    let wordEncode = document.querySelector("#wordEncode").value;
    let resultEncode = document.querySelector("#resultEncode");

    resultEncode.innerHTML = cipher.encode (offsetEncode, wordEncode) + "(" + offsetEncode + ")";
    
    /*try {
    } catch (error) {
        alert (error.message)
    }*/
}


let buttonDecode = document.querySelector("#buttonDecode");
buttonDecode.addEventListener ("click", messageDecode);

function messageDecode () {
    let offsetDecode = (document.querySelector("#offsetDecode").value);
    let wordDecode = (document.querySelector("#wordDecode").value);
    let resultDecode = document.querySelector("#resultDecode");

    resultDecode.innerHTML = cipher.decode (offsetDecode, wordDecode);

     /*try {
    } catch (error) {
        alert (error.message)
    }*/    
}

console.log(cipher);