const cipher = { 
    encode: function encode (word,offset) {
        let resultEncode = "";
        for (let i = 0; i < word.length; i++) {
            let wordEncode = parseInt (word.charCodeAt(i));

            if (wordEncode >= 65 && wordEncode <= 90) {
                let charCode = ((((wordEncode - 65) + offset) % 26) + 65);
                resultEncode = resultEncode + String.fromCharCode(charCode);
            } else {
                alert ("Você precisa digitar apenas letras maiúsculas");
                break;
            }
        }
        return resultEncode + " (" + offset + ")";
    },
    decode: function decode (word,offset) {
        let resultDecode = "";
        for (let i = 0; i < word.length; i++) {
            let wordDecode = parseInt (word.charCodeAt(i));

            if (wordDecode >= 65 && wordDecode <= 90) {
                let offset = (offset / 26);
                let charCode = ((((wordDecode - 65) + (26 - offset)) % 26) + 65);
                resultDecode = resultDecode + String.fromCharCode(charCode);
            }  else {

                alert ("Você precisa digitar apenas letras maiúsculas");
                break;
            }
        }
        return resultDecode
    }
}

export default cipher;
