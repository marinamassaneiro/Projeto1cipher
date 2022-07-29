import cipher from './cipher.js';

const buttonEncode = document.querySelector("#button-encode");
buttonEncode.addEventListener ("click", messageEncode);

function messageEncode (e) {
  e.preventDefault()
  const offsetEncode = parseInt (document.querySelector(".offset-encode").value);
  const wordEncode = document.querySelector(".word-encode").value;
  const resultEncode = document.querySelector(".result-encode");
    
  try {
    resultEncode.innerHTML = cipher.encode (offsetEncode, wordEncode) + "(" + offsetEncode + ")";
    } catch (error) {
        alert (error.message);
    }
}

let buttonDecode = document.querySelector("#button-decode");
buttonDecode.addEventListener ("click", messageDecode);

function messageDecode (e) {
  e.preventDefault()
  let offsetDecode = parseInt (document.querySelector(".offset-decode").value);
  let wordDecode = (document.querySelector(".word-decode").value);  
  let resultDecode = document.querySelector(".result-decode");
  resultDecode.innerHTML = cipher.decode (offsetDecode, wordDecode);
}

console.log(cipher);