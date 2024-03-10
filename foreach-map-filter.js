
// Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled



function doubleValues(arr){
    let doubledArr = [];
    arr.forEach(function(num){
        doubledArr.push(num * 2);
    });
        return doubledArr;
    };



// Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function


function onlyEvenValues(arr){
    let onlyEvenArr = [];
    arr.forEach(function(num){
        if(num % 2 === 0){
        onlyEvenArr.push(num);
}});
    return onlyEvenArr;
};


// Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.


function showFirstAndLast(arr){
    let firstNLastLetter = [];
    arr.forEach(function(char){
firstNLastLetter.push(char[0] + (char[char.length-1]));
    });
    return firstNLastLetter;

    
};


// Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed to the function with the new key and value added for each object 


function addKeyAndValue(arr,key,value){
    arr.forEach(function(val){
val[key] = value;
    });
    return arr;
};


// Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count


function vowelCount(str){
    const vowel = 'aeiou';
    let obj = {};
    let strArray = Array.from(str);

    strArray.forEach(function(char){
        if(vowel.indexOf(char) !== -1){
           if(obj[char]){
            obj[char]++;
        } else {
            obj[char] = 1;
        };
           
        };
    });
   return obj;
};


// Write a function called doubleValuesWithMap which accepts an array and returns a new array with all the values in the array passed to the function doubled



function doubleValuesWithMap(arr) {
    return arr.map(function(num){
        return num * 2;
    });
};


// Write a function called valTimesIndex which accepts an array and returns a new array with each value multiplied by the index it is currently at in the array.



function valTimesIndex(arr){
    return arr.map(function(num){
return (arr.indexOf(num) * num);
    });
};


// Write a function called extractKey which accepts an array of objects and some key and returns a new array with the value of that key in each object.



function extractKey(arr, key){
    return arr.map(function(value){
        return value[key];
    });
};


// Write a function called extractFullName which accepts an array of objects and returns a new array with the value of the key with a name of "first" and the value of a key with the name of  "last" in each object, concatenated together with a space. 



function extractFullName(arr){
    return arr.map(function(value){
        return `${value.first} ${value.last}`;
    });
};

/*
Write a function called filterByValue which accepts an array of objects and a key and returns a new array with all the objects that contain that key.

Examples:
    filterByValue([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner') // [{first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Colt', last:"Steele", isCatOwner: true}]
*/

function filterByValue(arr, key) {
    return arr.filter(function(value){
        return value[key];
    });
};


// Write a function called find which accepts an array and a value and returns the first element in the array that has the same value as the second parameter or undefined if the value is not found in the array.


function find(arr, searchValue) {
    return arr.filter(function(value){
        return value === searchValue;
    })[0];}



// Write a function called findInObj which accepts an array of objects, a key, and some value to search for and returns the first found value in the array.



function findInObj(arr, key, searchValue) {
    return arr.filter(function(value){
        return value[key] === searchValue;
    })[0];
}


// Write a function called removeVowels which accepts a string and returns a new string with all of the vowels (both uppercased and lowercased) removed. Every character in the new string should be lowercased.



function removeVowels(str) {
    const vowels = 'aeiou';
    return str.toLowerCase().split('').filter(function(value){
        return vowels.indexOf(value) === -1;
    })
    .join('');
}


// Write a function called doubleOddNumbers which accepts an array and returns a new array with all of the odd numbers doubled (HINT - you can use map and filter to double and then filter the odd numbers).


function doubleOddNumbers(arr) {
    return arr.filter(function(value){
        return value % 2 !== 0;
    })
    .map(function(value){
        return value * 2;
    });
}
