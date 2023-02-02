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
const arrUnique = [...new Set(arr).value()];
