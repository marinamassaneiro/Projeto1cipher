const cipher = { 
    encode: function encode (word,offset) {
        let resultEncode = "";
        for (let i = 0; i < word.length; i++) {
            let wordEncode = parseInt (word.charCodeAt(i));

            if (wordEncode >= 65 && wordEncode <= 122) {
                let offsetTwo = parseInt (offset / 26);
                let offsetThree = (offset - (26 * offsetTwo));
                let charCode = ((((wordEncode - 65) + offsetThree) % 58) + 65);
                if (charCode >= 91 && charCode <= 96) {
                    let minCharCode = charCode + 6
                    resultEncode = resultEncode + String.fromCharCode(minCharCode);
                } else {
                     resultEncode = resultEncode + String.fromCharCode(charCode);
            } } else {
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
                let offsetTwo = parseInt (offset / 26);
                let offsetThree = (offset - (26 * offsetTwo));
                let charCode = (((((wordDecode - 65) - offsetThree) + 26) % 26) + 65);
                resultDecode = resultDecode + String.fromCharCode(charCode);
                
            } else {
                alert ("Você precisa digitar apenas letras maiúsculas");
                break;
            }
        }
        return resultDecode
    }
}

export default cipher;

