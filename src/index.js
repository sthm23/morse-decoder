const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let obj_keys = Object.keys(MORSE_TABLE);
    let obj_values = Object.values(MORSE_TABLE);
    
    //expr делим на 10 кусков
    let arr = [];
    for(let i=0; i<expr.length;){
        let a = expr.slice(i, (i+10))
        arr.push(a);
        i=i+10
    }
 
    //массив из 10 кусков чисел преврашаем на точку и на чертечку 
    const arr2 = arr.map(item=>{
        let tempArr = [];
        for(let i=0; i<item.length; i=i+2){
            if(item[i]+item[i+1]==='10'){
                tempArr.push('.');
            }else if(item[i]+item[i+1]==='11'){
                tempArr.push('-');
            }else if(item[i]==='*'){
                tempArr.push('*')
            }
        }
        return tempArr.join("");
    })

    //массив морзе преврашаем на букву
    let arr3 = [];
    for(let q=0; q<arr2.length; q++){
        if(arr2[q]==='*****'){
            arr3.push(' ');
        }else{
            for(let i=0; i<obj_keys.length; i++){
                if(arr2[q]==obj_keys[i]){
                    arr3.push(obj_values[i])
                }
            }
        }
    }
    return arr3.join('');
}

module.exports = {
    decode
}
