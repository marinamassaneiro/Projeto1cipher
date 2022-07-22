const cipher = { 
    encode: function encode (word,offset) {
        let resultEncode = "";
        for (let i = 0; i < word.length; i++) {
            let newOffset = (offset - (parseInt (offset / 26)) * 26);

            if (word.charCodeAt(i) >= 65 && word.charCodeAt(i) <= 90) {
                let charCode = ((((word.charCodeAt(i) - 65) + newOffset) % 26) + 65);
                resultEncode = resultEncode + String.fromCharCode(charCode);     
            } else {
                alert ("Você precisa digitar apenas letras maiúsculas sem acento.");
                break
            }
        }
        return resultEncode;
    },

    decode: function decode (word,offset) {
        let resultDecode = "";
        for (let i = 0; i < word.length; i++) {
            let newOffset = (offset - (parseInt (offset / 26)) * 26);

            if (word.charCodeAt(i) >= 65 && word.charCodeAt(i) <= 90) {
                let charCode = (((((word.charCodeAt(i) - 65) - newOffset) + 26) % 26) + 65);
                resultDecode = resultDecode + String.fromCharCode(charCode); 
            } else {
                alert ("Você precisa digitar apenas letras maiúsculas sem acento.");
                break
            }
        }
        return resultDecode;
    }
}

export default cipher;

