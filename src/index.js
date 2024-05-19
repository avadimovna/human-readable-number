module.exports = function toReadable (number) {
   let numToStr = number.toString();
   if (numToStr.length === 1) {
    numToStr = `00${numToStr}`;
   } else if (numToStr.length === 2) {
    numToStr = `0${numToStr}`;
   }
   let hundreds = '';
   let dozens = '';
   let units = '';
   if (numToStr === '000') {
    return 'zero';
   }
   switch (+numToStr[0]) {
    case 0:
        hundreds = '';
        break;
    case 1:
        hundreds = 'one hundred ';
        break;
    case 2:
        hundreds = 'two hundred ';
        break;
    case 3:
        hundreds = 'three hundred ';
        break;
    case 4:
        hundreds = 'four hundred ';
        break;
    case 5:
        hundreds = 'five hundred ';
        break;
    case 6:
        hundreds = 'six hundred ';
        break;
    case 7:
        hundreds = 'seven hundred ';
        break;
    case 8:
        hundreds = 'eight hundred ';
        break;
    case 9:
        hundreds = 'nine hundred ';
        break;
   }


   switch (+numToStr[1]) {
    case 0:
        dozens = '';
        break;
    case 1:
        switch (+numToStr[2]) {
            case 0:
                dozens = 'ten';
                break;
            case 1:
                dozens = 'eleven';
                break;
            case 2:
                dozens = 'twelve';
                break;
            case 3:
                dozens = 'thirteen';
                break;
            case 4:
                dozens = 'fourteen';
                break;
            case 5:
                dozens = 'fifteen';
                break;
            case 6:
                dozens = 'sixteen';
                break;
            case 7:
                dozens = 'seventeen';
                break;
            case 8:
                dozens = 'eighteen';
                break;
            case 9:
                dozens = 'nineteen';
                break;
        }
        return `${hundreds}${dozens}`;
    case 2:
        dozens = 'twenty ';
        break;
    case 3:
        dozens = 'thirty ';
        break;
    case 4:
        dozens = 'forty ';
        break;
    case 5:
        dozens = 'fifty ';
        break;
    case 6:
        dozens = 'sixty ';
        break;
    case 7:
        dozens = 'seventy ';
        break;
    case 8:
        dozens = 'eighty ';
        break;
    case 9:
        dozens = 'ninety ';
        break;
   }
   switch (+numToStr[2]) {
    case 0:
       units = '';
       break;
    case 1:
        units = 'one';
        break;
    case 2:
        units = 'two';
        break;
    case 3:
        units = 'three';
        break;
    case 4:
        units = 'four';
        break;
    case 5:
        units = 'five';
        break;
    case 6:
        units = 'six';
        break;
    case 7:
        units = 'seven';
        break;
    case 8:
        units = 'eight';
        break;
    case 9:
        units = 'nine';
        break;
   }
   console.log(`${hundreds}${dozens}${units}`);
   let result = `${hundreds}${dozens}${units}`;
   return result.trim();
   
   }
module.exports(55);

