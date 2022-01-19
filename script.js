// ****************************************************** NUMBER 1 ***************************************************************** //
const isOldEnoughToDrink = (age) => {
    if (age > 18) {
        console.log(true)
    } else {
        console.log(false);
    }
}

// isOldEnoughToDrink(15);
// isOldEnoughToDrink(22);
// isOldEnoughToDrink(16);
// isOldEnoughToDrink(30);
// isOldEnoughToDrink(25);



// ****************************************************** NUMBER 2 ***************************************************************** //
const isOldEnoughToDrinkAndDrive = (age) => {
    if (age > 21) {
        console.log(false)
    } else {
        console.log(false);
    }
}
// isOldEnoughToDrinkAndDrive(30)
// isOldEnoughToDrinkAndDrive(16)
// isOldEnoughToDrinkAndDrive(18)
// isOldEnoughToDrinkAndDrive(21)
// isOldEnoughToDrinkAndDrive(28)



// ****************************************************** NUMBER 3 ***************************************************************** //
const getProperty = (obj, key) => {
    return obj[key]; 
}

// Examples
// console.log(getProperty({key: 'value', b: 2}, "key"));
// console.log(getProperty({a: 1, b: 2}, "c"));



// ****************************************************** NUMBER 4 ***************************************************************** //
const addProperty = (obj, key) => {
    obj[key] = true;
    return obj;
}
let myObj = {};
addProperty(myObj, 'myProperty');
// console.log(myObj.myProperty);




// ****************************************************** NUMBER 5 ***************************************************************** //
const isOldEnoughToDrinkAndDriveNigeria = (age) => {
    if (age > 18) {
        console.log(false)
    } else {
        console.log(false);
    }
}
// isOldEnoughToDrinkAndDriveNigeria(30)
// isOldEnoughToDrinkAndDriveNigeria(16)
// isOldEnoughToDrinkAndDriveNigeria(18)
// isOldEnoughToDrinkAndDriveNigeria(21)
// isOldEnoughToDrinkAndDriveNigeria(28)




// ****************************************************** NUMBER 6 ***************************************************************** //
const computeAverageLengthOfWords = (a,b) => {
    arrayLength = a.length + b.length,
    result = arrayLength / 2;
    console.log(result);
}

// computeAverageLengthOfWords('code', 'programs')



// ****************************************************** NUMBER 7 ***************************************************************** //
const transformFirstAndLast = (array) => {
    let myobj={}
    const firstElem = array.shift();
    const lastElem = array.pop();
    myobj[firstElem] = lastElem
    
    return myobj;
  }
  
  
  var output = transformFirstAndLast(['King', 'Elizabeth', 'Of Hearts', 'Beyonce', 'Elo']);
//   console.log(output);


// ****************************************************** NUMBER 8 ***************************************************************** //
const object1 = {
    a: 'somestring',
    number: 11,
    hungry: false,
    grammyWins: 1
  };
  
//   console.log(Object.keys(object1));