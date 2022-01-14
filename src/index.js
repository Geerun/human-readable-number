module.exports = function toReadable (number) {

var mr1 = ["zero","one","two","three","four","five","six","seven","eight","nine"];
var mr2 = ["ten", "eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"];
var mr21 = ["twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];
result = '';
    
    let i = String(number);
    
    switch(i.length) {
        case 1: 
        result = mr1[number]; break;

        case 2: {
            if (i[0] == '1') result = mr2[Number(i[1])]
            else if (i[1] == '0') result = mr21[Number(i[0])-2]
                    else result = mr21[Number(i[0]-2)] + ' ' + mr1[i[1]]
                }; break;
        case 3: {
            result = mr1[Number(i[0])] + " hundred";
             if ((i[1] == '0') && (i[2] == '0')) break
                else if (i[1] == '0') {result += " " + mr1[Number(i[2])];}  
                    else if (i[1] == '1') {result += " " + mr2[Number(i[2])]}
                        else if (i[2] == '0') {result += " " + mr21[Number(i[1])-2]}
                            else result += " " + mr21[Number(i[1])-2] + ' ' + mr1[i[2]];
                };
    }
    return(result);
}
