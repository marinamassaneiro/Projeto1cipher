const cipher = { 
    encode: function encode (word,offset) {
        let resultEncode = "";
        for (let i = 0; i < word.length; i++) {
            let wordEncode = parseInt (word.charCodeAt(i));
            let offsetTwo = parseInt (offset / 26);
            let offsetThree = (offset - (26 * offsetTwo));

            if (wordEncode >= 65 && wordEncode <= 90) {
                let charCode = ((((wordEncode - 65) + offsetThree) % 26) + 65);
                resultEncode = resultEncode + String.fromCharCode(charCode);
            
            } else if (wordEncode >= 97 && wordEncode <= 122) {
                let charCode = ((((wordEncode - 97) + offsetThree) % 26) + 97);
                resultEncode = resultEncode + String.fromCharCode(charCode);
             
            } else {
                alert ("Você precisa digitar apenas letras minúsculas ou maiúsculas sem acento.");
                break;
            }
        }
        return resultEncode + " (" + offset + ")";
    },

    decode: function decode (word,offset) {
        let resultDecode = "";
        for (let i = 0; i < word.length; i++) {
            let wordDecode = parseInt (word.charCodeAt(i));
            let offsetTwo = parseInt (offset / 26);
            let offsetThree = (offset - (26 * offsetTwo));

            if (wordDecode >= 65 && wordDecode <= 90) {
                let charCode = (((((wordDecode - 65) - offsetThree) + 26) % 26) + 65);
                resultDecode = resultDecode + String.fromCharCode(charCode);
                
            } else if (wordDecode >= 97 && wordDecode <= 122) {
                let charCode = (((((wordDecode - 97) - offsetThree) + 26) % 26) + 97);
                resultDecode = resultDecode + String.fromCharCode(charCode);
            
            } else {
                alert ("Você precisa digitar apenas letras minúsculas ou maiúsculas sem acento.");
                break;
            }
        }
        return resultDecode
    }
}

export default cipher;

