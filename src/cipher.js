const cipher = {
  encode: function encode (offset,word) {
    if (!(word && offset) && (typeof offset !== "number" || typeof word !== "string")){
      throw TypeError ("Mensagem ou número em formato inválido"); 
    }

    let resultEncode = "";
    for (let i = 0; i < word.length; i++) {
        const newOffset = (offset - (parseInt (offset / 26)) * 26);

      if (word.charCodeAt(i) >= 65 && word.charCodeAt(i) <= 90) {
        const charCode = ((((word.charCodeAt(i) - 65) + newOffset) % 26) + 65);
        resultEncode += String.fromCharCode(charCode);   
      } else if (word.charCodeAt(i) >= 97 && word.charCodeAt(i) <= 122) {
        const charCode = ((((word.charCodeAt(i) - 97) + newOffset) % 26) + 97);
        resultEncode += String.fromCharCode(charCode);                  
      } else {
        resultEncode += word[i];
      }
    } return resultEncode;
  },
  decode: function decode (offset, word) {
    if (typeof offset !== "number" || typeof word !== "string"){
        throw TypeError ("Mensagem ou número em formato inválido")  
    }
        
    let resultDecode = "";
    for (let i = 0; i < word.length; i++) {
      const newOffset = (offset - (parseInt (offset / 26)) * 26);

      if (word.charCodeAt(i) >= 65 && word.charCodeAt(i) <= 90) {
        const charCode = (((((word.charCodeAt(i) - 65) - newOffset) + 26) % 26) + 65);
        resultDecode += String.fromCharCode(charCode); 
      } else if (word.charCodeAt(i) >= 97 && word.charCodeAt(i) <= 122) {
        const charCode = (((((word.charCodeAt(i) - 97) - newOffset) + 26) % 26) + 97);
        resultDecode += String.fromCharCode(charCode);
      } else {
        resultDecode += word[i];
      }
    } return resultDecode;
  }
}
export default cipher;
