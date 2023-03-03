const Functions = {
     generateRandomNumPlate(length) {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        //assing values for Numplate
        const specialCreator = "-";
        const threeDigitNumber = Math.floor(Math.random() * 1000);
        result = result + specialCreator + threeDigitNumber;
        return result;
      },
     generateRandomChasisNum(length) {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        const Numbers = Math.floor(Math.random() * 1000);
        result = result + Numbers;
        return result;
    },
    randomGenerator(length, type) {
          var result = '';
          var alphabates = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
          var numbers = '1234567890'
          var characters = null
          var charactersLength = 0
          if (type == "phoneNumber") {
            charactersLength = numbers.length
            characters = numbers
            for (var i = 0; i < length; i++) {
              result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            return "03" + result;
          }
          else if (type === "Name") {
            //var alphabates = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            charactersLength = alphabates.length
            characters = alphabates
            for (var i = 0; i < length; i++) {
              result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            return result
      
          }
          else if (type === "CNICNO") {
            charactersLength = numbers.length
            characters = numbers
            for (var i = 0; i < length; i++) {
              result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            return result;
          }
          else {
            return null
          }
        }
}
export default Functions
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