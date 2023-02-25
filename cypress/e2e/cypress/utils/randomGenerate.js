
// function generateRandomNumPlate(length) {
//     var result = '';
//     var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//     var charactersLength = characters.length;
//     for (var i = 0; i < length; i++) {
//       result += characters.charAt(Math.floor(Math.random() * charactersLength));
//     }
//     //assing values for Numplate
//     const specialCreator = "-";
//     const threeDigitNumber = Math.floor(Math.random() * 1000);
//     result = result + specialCreator + threeDigitNumber;
//     return result;
//   }
//   function generateRandomChasisNum(length) {
//     var result = '';
//     var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//     var charactersLength = characters.length;
//     for (var i = 0; i < length; i++) {
//       result += characters.charAt(Math.floor(Math.random() * charactersLength));
//     }
//     const Numbers = Math.floor(Math.random() * 1000);
//     result = result + Numbers;
//     return result;

//   }

//   const _default = { generateRandomChasisNum, generateRandomNumPlate };
// export { _default as default };