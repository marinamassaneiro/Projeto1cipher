const cipher = { 
    encode: function encode (offset,word) {
        /*if (typeof offset !== "number" || typeof word !== "string"){
            throw TypeError ("Mensagem ou número em formato inválido")  
        }*/

        let resultEncode = "";
        for (let i = 0; i < word.length; i++) {
            let newOffset = (offset - (parseInt (offset / 26)) * 26);

            if (word.charCodeAt(i) >= 65 && word.charCodeAt(i) <= 90) {
                let charCode = ((((word.charCodeAt(i) - 65) + newOffset) % 26) + 65);
                resultEncode += String.fromCharCode(charCode);   
            } else if (word.charCodeAt(i) >= 97 && word.charCodeAt(i) <= 122) {
                let charCode = ((((word.charCodeAt(i) - 97) + newOffset) % 26) + 97);
                resultEncode += String.fromCharCode(charCode);                  
            /*} else if (word.charCodeAt(i) === 32) {
                resultEncode += String.fromCharCode(i); */ 
            } else {
                alert ("Você precisa digitar apenas letras minúsculas e maiúsculas sem acento.");
                break;
            }
        } return resultEncode;
    },

    decode: function decode (offset, word) {
        /*if (typeof offset !== "number" || typeof word !== "string"){
            throw TypeError ("Mensagem ou número em formato inválido")  
        }*/
        
        let resultDecode = "";
        for (let i = 0; i < word.length; i++) {
            let newOffset = (offset - (parseInt (offset / 26)) * 26);

            if (word.charCodeAt(i) >= 65 && word.charCodeAt(i) <= 90) {
                let charCode = (((((word.charCodeAt(i) - 65) - newOffset) + 26) % 26) + 65);
                resultDecode += String.fromCharCode(charCode); 
            } else if (word.charCodeAt(i) >= 97 && word.charCodeAt(i) <= 122) {
                let charCode = (((((word.charCodeAt(i) - 97) - newOffset) + 26) % 26) + 97);
                resultDecode += String.fromCharCode(charCode);
            /*} else if (word.charCodeAt(i) === 32) {
                resultDecode += String.fromCharCode(i);*/
            } else {
                alert ("Você precisa digitar apenas letras minúsculas e maiúsculas sem acento.");
                break;
            }
        } return resultDecode;
    }
}

export default cipher;
