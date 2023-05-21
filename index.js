numbers = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
sum = 0;
countPositive = 0;

// Знайти суму та кількість позитивних елементів.
for (i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
    sum += numbers[i];
    countPositive++;        
    }
}

console.log(`The sum of positive numbers is ${sum}.`);
console.log(`There are ${countPositive} positive numbers in the array.`);

// Знайти мінімальний елемент масиву та його порядковий номер.
minNumber = numbers[0];

for (i = 0; i < numbers.length; i++) {
    if(numbers[i] < minNumber) {
        minNumber = numbers[i];
    }     
}

console.log(`The lowest number is ${minNumber} and has the index ${numbers.indexOf(minNumber)} 
or its position will be ${numbers.indexOf(minNumber)+1}.`);

// Знайти максимальний елемент масиву та його порядковий номер.
maxNumber = numbers[0];

for (i = 0; i < numbers.length; i++) {
    if(numbers[i] > maxNumber) {
        maxNumber = numbers[i];
    }     
}

console.log(`The highest number is ${maxNumber} and has the index ${numbers.indexOf(maxNumber)} 
or its position will be ${numbers.indexOf(maxNumber)+1}.`);

// Визначити кількість негативних елементів.
countNegative = 0;

for (i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0) {
    countNegative++;        
    }
}

console.log(`There are ${countNegative} negative numbers in the array.`);

// Знайти кількість непарних позитивних елементів.
countOdds = 0;

for (i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 1) {
        countOdds++;
    }
}

console.log(`There are ${countOdds} odd positive numbers in the array.`);

// Знайти кількість парних позитивних елементів.
countEven = 0;

for (i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0 && numbers[i] % 2 === 0) {
    countEven++;        
    }
}

console.log(`There are ${countEven} even positive numbers in the array.`);

// Знайти суму парних позитивних елементів.
evenSum = 0;

for (i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0 && numbers[i] % 2 === 0) {
    evenSum += numbers[i];       
    }
}

console.log(`The sum of even positive numbers is ${evenSum}.`);

// Знайти суму непарних позитивних елементів.
oddsSum = 0;

for (i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 1) {
        oddsSum += numbers[i]; 
    }
}

console.log(`The sum of odd positive numbers is ${oddsSum}.`);

// Знайти добуток позитивних елементів.
amount = 1;

for (i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
    amount *= numbers[i];        
    }
}

console.log(`The sum of even positive numbers is ${amount}.`);

//Знайти найбільший серед елементів масиву, остальні обнулити.

for (i = 0; i < numbers.length; i++) {
    if(numbers[i] > maxNumber) {
        maxNumber = numbers[i];
    }
    numbers.length = maxNumber;   
}

console.log(numbers.length);

//ще цей вариант, якщо через length не те, що малось на увазі
for (i = 0; i < numbers.length; i++) {
    if(numbers[i] > maxNumber) {
        maxNumber = numbers[i];
    }   
}
arrayToZero = numbers.map(value => maxNumber !== value ? 0 : value);

console.log(arrayToZero);