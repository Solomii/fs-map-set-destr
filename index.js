"use strict";
// Map  найчастіше використовують для створення словників

// const obj = {
//   prop:12
// }

// const arr = [];
// const f = ()=>{}

// const map1 = new Map();

// map1.set(true, "true");
// map1.set(obj, "obj");
// map1.set(arr, "arr");
// map1.set(1, "1");
// map1.set(f, "f");
// console.log(map1);
// console.log(map1.get(1));
// map1.delete(1)
// console.log(map1.has(1));

const dictionary = new Map();
dictionary.set("dog", "собака");
dictionary.set("cat", "кіт");
dictionary.set("rat", "щур");
dictionary.set("forest", "ліс");
dictionary.set("funny", "веселий");
dictionary.set("sad", "сумний");
dictionary.set("go", "йти");
dictionary.set("walk", "гуляти");
dictionary.set("jump", "стрибати");
dictionary.set("talk", "говорити");
dictionary.set("happy", "щасливий");
dictionary.set("morning", "ранок");
dictionary.set("in", "в");
dictionary.set("at", "на");
dictionary.set("and", "і");

const sentens = "in morning Sad dog and  funny cat go to forest  with rat";

const translate = (str) => {
    /* обрізаємо пробіли переводимо в нижній регістр, розбиваємо на слова, для кожного слова знаходимо ключ в мапі за яким повертаємо значення. зі значень повертаємо масив ключів. 
  dictonary.get(key)
  отримуємо масив українських значень(перекладених). з масива робимо string
  */
    return str
        .trim()
        .toLowerCase()
        .split(" ")
        .map((word) => (dictionary.has(word) ? dictionary.get(word) : word))
        .join(" ");
};

console.log(translate(sentens));

//!!!! як перебирати map!!!!!!

// const keysIterator = dictionary.keys();
for (const iterator of dictionary.keys()) {
    console.log(iterator);
}

console.log(...dictionary.keys());
for (const [key, value] of dictionary.entries()) {
    console.log(key, value);
}

const arrKeys = [...dictionary.keys()];

// !!!! Set

const arr = [1, 2, 2, 3, 3, 3, 3, 4];

const set1 = new Set(arr);
// set1.add(1);
// set1.add(1);
// set1.add(1);
// set1.add('1');
// set1.add([1]);
// set1.add([1]);
// set1.add({1:1});
// set1.add({1:1});
// set1.add({1:1});
console.log(set1);

// const arrUnique = [...set.value()]
// const arrUnique = [...set.keys()]
const arrUnique = [...new Set(arr).keys()];

//!!!!! task
/*
створити масив з двох приведенич в який потраплять тільки унікальні значення
 */

const number1 = [1, 2, 3, 4, 5, 6];
const number2 = [1, 3, 4, 5, 6, 77, 8, 88, 9];
// const numberConcat=  number1.concat.number2;

const numberUnique = [...new Set([...number1, ...number2])];
console.log(numberUnique);

//!!!!!! деструктиризація !!!!

const user = {
    personalInfo: {
        id: 12,
        firstName: "Tom",
        lastName: "Test",
        bday: {
            day: 28,
            month: 2,
            year: 1987,
        },
        gender: "male",
    },
    contactInfo: {
        phone: "123-555",
        email: "dfd@gmail.com",
        adress: {
            town: "NY",
            street: "Avenu 33",
        },
    },

    profession: "programmer",
};

// const userLastName= user.personalInfo.lastName;
// const userYearBorn = user.personalInfo.bday;
// const userProffesion = user.profession

const {
    profession: userProf,
    contactInfo: {
        email: userEmail,
        phone: userPhone,
        adress: { street: userStreet },
    },
    personalInfo: {
        lastName,
        bday: { year: userYearBorn },
        gender: userGender,
    },
} = user;

const logFullName = ({ personalInfo: { firstName, lastName }, ...restObject }) => {
    console.log(firstName, lastName);
    console.log(restObject)
};

logFullName(user);
console.log(userProf);
console.log(userEmail);
console.log(userYearBorn);
console.log(userGender);
console.log(userPhone);
console.log(userStreet);

const {contactInfo:{email},...rest}=user;

console.log(rest)
