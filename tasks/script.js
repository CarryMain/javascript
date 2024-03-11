// 1) Создайте функцию, которая будет вычислять объем и площадь полной поверхности куба (тоже базовая математика, иногда используется в создании анимаций). Эта функция принимает в себя целое число со значением длины ребра куба. Ответ выведите в формате строки, который изображен в примерах.
// Если в функцию попал неправильный аргумент или вычислить значения невозможно - вернуть строку "При вычислении произошла ошибка"
// НЕ ИСПОЛЬЗУЙТЕ ОПЕРАТОР СТЕПЕНИ ** - в онлайн среде браузера он не работает и тесты будут ломаться. Это из-за того, что этот оператор из более нового стандарта, чем тут доступен.
// Примеры:
// calculateVolumeAndArea(5)  => 'Объем куба: 125, площадь всей поверхности: 150'
// calculateVolumeAndArea(15)  => 'Объем куба: 3375, площадь всей поверхности: 1350'
// calculateVolumeAndArea(15.5)  => 'При вычислении произошла ошибка'
// calculateVolumeAndArea('15')  => 'При вычислении произошла ошибка'
// calculateVolumeAndArea(-15)  => 'При вычислении произошла ошибка'

function calculateVolumeAndArea(number) { 
    if(typeof number === 'string' || number <= 0 || !Number.isInteger(number)) {
        return console.log('При вычислении произошла ошибка')
    }
    let cubeVolume = number * number * number;
    let cubeArea = (number * number) * 6;
    return console.log(`Объем куба: ${cubeVolume}, площадь всей поверхности: ${cubeArea}`)
}

calculateVolumeAndArea(-15)

// 2) Постепенно переходим к более реалистичным задачам :) Вы обнаружите, что там используется все тоже самое.
// Если в функцию попал неправильный аргумент или вычислить значения невозможно - вернуть строку "При вычислении произошла ошибка"
// Напишите функцию, которая будет определять номер купе по переданному ей номеру места. 
// Функция принимает только целое число от 1 до 36.
// Если переданный аргумент не число, отрицательное или дробное - возвращается сообщение:
// "Ошибка. Проверьте правильность введенного номера места"
// Если число 0 или больше 36, то сообщение: "Таких мест в вагоне не существует"
// Пример:
// getCoupeNumber(33)  => 9
// getCoupeNumber(7)  => 2
// getCoupeNumber(300)  => "Таких мест в вагоне не существует"
// getCoupeNumber(0)  => "Таких мест в вагоне не существует"
// getCoupeNumber(7.7)  => "Ошибка. Проверьте правильность введенного номера места"
// getCoupeNumber(-10)  => "Ошибка. Проверьте правильность введенного номера места"
// getCoupeNumber('Hello')  => "Ошибка. Проверьте правильность введенного номера места"

function getCoupeNumber(number) { 
    if(typeof number === 'string' || !Number.isInteger(number) || number<0) {
        return console.log('Ошибка. Проверьте правильность введенного номера места')
    }
    if(number === 0 || number > 36) { 
        return console.log('Таких мест в вагоне не существует')
    }
    const numCoupe = Math.ceil(number / 4)
    return numCoupe
}

console.log(getCoupeNumber(32))


// 1) Создайте функцию, которая принимает в себя целое число минут и возвращает время в нужном формате строки. (Смотри пример). Обратите внимание на окончание слова "час" - оно меняется в зависимости от цифры. Если вместо аргумента приходит не число, дробное или отрицательное число - функция возвращает строку "Ошибка, проверьте данные"
// Внимание! Давайте пока ограничимся максимум 600ю минутами (10 часов). Так как проверки на большие числа будут раздувать код (33 часа, 31 час, 11 часов и тд). Этого будет достаточно и код будет проверять именно этот промежуток (1 - 10 часов). Но вы можете реализовать и полный скрипт, он тоже должен проходить тесты.
// Пример:
// getTimeFromMinutes(150) => "Это 2 часа и 30 минут"
// getTimeFromMinutes(50) => "Это 0 часов и 50 минут"
// getTimeFromMinutes(0) => "Это 0 часов и 0 минут"
// getTimeFromMinutes(-150) => "Ошибка, проверьте данные"

function getTimeFromMinutes(minute) { 
    let min;
    let hour;
    if(isNaN(minute) || !Number.isInteger(minute) || minute < 0) { 
        return console.log('Ошибка, проверьте данные')
    }
    hour = Math.floor(minute / 60)
    min = (minute % (hour * 60))
    if(hour == 0) {
        min = minute
    }
    if(hour == 1) {
        return console.log(`Это ${hour} час и ${min} минут`)
    } else if(hour == 2 || hour == 3 || hour == 4) {
        return console.log(`Это ${hour} часа и ${min} минут`)
    } else { 
        return console.log(`Это ${hour} часов и ${min} минут`)
    }
}

console.log(getTimeFromMinutes(55))



// 2) Напишите функцию, которая принимает в себя 4 числа и возвращает самое большее из них. Если один из аргументов не является числом или их меньше 4 - возвращается 0. Дробные числа разрешены.
// Пример:
// findMaxNumber(1, 5, 6.6, 11); =>  11
// findMaxNumber(1, 5, '6', '10');  =>  0

function findMaxNumber(a, b, c, d) {
    if(!a || !b || !c || !d) { 
        return 0
    }
    if(typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number' || typeof d !== 'number') { 
        return 0
    }
    const arr = [a, b, c, d]
    return Math.max(...arr)
}

console.log(findMaxNumber(1, 5, 6.6, 11))


// Создайте функцию, которая будет принимать в себя один аргумент-целое положительное число. Она должна возвращать строку, в которой будут через пробел выведены числа Фибоначчи. Причем, их количество должно быть равно переданному аргументу. 

// Если переданный аргумент не число - вернуть пустую строку. Решать без применения рекурсии.

//3 -- 0 1 1 2 3 5 8 13 21 34

function fib(num) { 
    let result = '';
    let first = 0;
    let second = 1;

    for(let i = 0; i < num; i++) {
        if(i + 1 === num) {
            result += `${first}`
        } else { 
            result += `${first} `
        }

        let third = first + second 
        first = second 
        second = third 
    }
    return result
}

console.log(fib(21))

// 1) Напишите функцию showExperience, которая будет принимать в себя объект со всеми данными и возвращать строку с опытом.
// Пример:
// showExperience(personalPlanPeter) => '1 month'
// P.S. желательно использовать деструктуризацию, но не обязательно

const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    }
};

function showExperience(obj) { 
    const {exp} = obj.skills
    return exp
}

console.log(showExperience(personalPlanPeter))

// 2) Напишите функцию showProgrammingLangs, которая будет принимать в себя объект со всеми данными и возвращать строку в нужном виде.
// Пример:
// showProgrammingLangs(personalPlanPeter)  =>
// "Язык js изучен на 20% Язык php изучен на 10%"
// Причем функция должна работать вне зависимости от количества языков. Если ни один не указан, то возвращается пустая строка.
// P.S. Для переноса строки используется \n в конце строки.

function showProgrammingLangs(obj) {
    const {programmingLangs} = obj.skills
    let result = ''
    for(let key in programmingLangs) {
        result += `language ${key} learning in ${programmingLangs[key]}\n`
    }
    if(result === '') {
        return ''
    }
    return result
}

console.log(showProgrammingLangs(personalPlanPeter))

// 3) Создайте метод showAgeAndLangs внутри объекта personalPlanPeter. При его вызове метод будет принимать в себя объект и возвращать строку в нужном виде.
// Пример:
// personalPlanPeter.showAgeAndLangs(personalPlanPeter)
// => 'Мне 29 и я владею языками: RU ENG'
// Заметьте, что возраст и языки подставляются автоматически из объекта, а языки всегда в верхнем регистре (большими буквами). Если данные в объекте поменяются, то и сообщение тоже изменится.
const personalPlanKirill = {
    name: "Kirill",
    age: "25",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '70%',
            php: '10%',
            ruby: '30%'
        },
        exp: '6 month'
    },
    showAgeAndLangs: function () {
        const {languages} = this.skills
        return `Me ${this.age} years and i have language: ${languages.join(' ').toUpperCase()}`
    }
};

console.log(personalPlanKirill.showAgeAndLangs())


// 1) Напишите функцию showFamily, которая будет принимать в себя массив строк и возвращать сообщение в нужном формате.
// showFamily(family)  => 'Семья состоит из: Peter Ann Alex Linda'
// Имена подставляются автоматически из массива. Если массив пустой, то возвращается сообщение 'Семья пуста'

const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    if(arr.length == 0) { 
        return 'Family is empty'
    }

    return `Family consists of: ${arr.join(' ')}`
}

console.log(showFamily(family))

// 2) напишите функцию standardizeStrings, которая будет принимать в себя массив строк и будет выводить в консоль эти строки в нижнем регистре. 
// Пример:
// standardizeStrings(favoriteCities)  выведет в консоль
// lisbon
// rome
// milan
// dublin

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    return `${arr.join(' \n').toLowerCase()}`
}

console.log(standardizeStrings(favoriteCities))

// 3) Задача с собеседований. Напишите функцию reverse, которая принимает в себя строку и возвращает эту строку в обратном порядке.
// Пример:
// const someString = 'This is some strange string';
// reverse(someString) => 'gnirts egnarts emos si sihT'

const someString = 'This is some strange string';

// function reverse(str) {
//     return str.split('').reverse().join('')
// }

function reverse(str) { 
    let result = ''
    for(let i = str.length - 1; i >= 0; i--) {
        result += str[i]
    }
    return result
}

console.log(reverse(someString))

// 4) Представьте такую реальную ситуацию. У вас есть банкомат, который выдает деньги из двух разных банков в разных валютах. Один банк основной с базовыми валютами, второй дополнительный с прочими валютами:
// const baseCurrencies = ['USD', 'EUR'];
// const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
// Вам нужно создать главную функцию банкомата availableCurr, которая принимает два аргумента: первый - это массив со всеми доступными валютами из двух банков сразу (сейчас представим, что они не могут повторяться), второй - необязательный аргумент, который указывает ту валюту, которая сейчас закончилась в банкомате. Если массив в первом аргументе пустой - то функция возвращает строку 'Нет доступных валют'. Функция возвращает строку в нужном виде.
// Пример:
// availableCurr(['UAH', 'RUB', 'CNY'], 'CNY')
// Вернет строку:
// Доступные валюты:
// UAH
// RUB
// Заметьте: 
// - CNY (юань) исчез из списка валют, значит такая валюта закончилась
// - После валюты: стоит перенос строки \n, и после каждой валюты тоже. Это важно для тестов
// - Данные для первого аргумента должны приходить сразу из двух банков, причем сначала baseCurrencies, потом additionalCurrencies по порядку

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    if(arr.length == 0) {
        return 'Not avaible currency'
    }
    if(arr.includes(missingCurr)) {
        return `Доступные вылюты:\n${arr.filter((e) => e !== missingCurr).join(' \n')}`
    } else { 
        return `Доступные валюты:\n${arr.join(' \n')}`
    }
}

console.log(availableCurr([...baseCurrencies, ...additionalCurrencies], 'USD'))

const arr = [1, 2, 3]

console.log(arr.includes(1))


// Написать функцию isBudgetEnough, которая буде возвращать строку. Если бюджета хватает для отопления всего объема торгового центра - выводится 'Бюджета достаточно', если нет - 'Бюджета недостаточно'
// Но эта задача содержит несколько подзадач внутри:
// - вычисление общей площади всех магазинов, которая вычисляется как длина магазина, умноженная на его ширину;
// - вычисление общего объема торгового центра, так как цена отопления указана в кубических метрах;
// - определение того, хватает ли бюджета на оплату такого объема;
// - все числа идут без единиц измерения для упрощения, просто цифры и все;
// - функция должна продолжать работать, даже если изменяется количество магазинов, высота, бюджет или подставляется вообще другой объект


const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 100000
}

function isBudgetEnough(data) {
    let yardage = data.shops.map(item => item.area = item.width * item.length).reduce((a, b) => a + b)
    let space = yardage * data.height
    let volume = space * data.moneyPer1m3
    if(volume <= data.budget) {
        return 'Бюджета хватает'
    }
    return 'Бюджета не хватает'
}

console.log(isBudgetEnough(shoppingMallData))


// У вас есть список учеников, которые хотят поиграть в игру:
// const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];
// Но команд может быть только 3 по 3 человека. Напишите функцию sortStudentsByGroups, которая принимает в себя массив строк. 
// Внутри она сначала сортирует имена по алфавиту. Затем распределяет учеников по 3 человека в 3 группы по алфавитному порядку. Эти группы должны быть массивами. Как итог, функция возвращает новый массив с тремя командами и строкой как 4й элемент.
// Пример:
// sortStudentsByGroups(students)  =>
// [
//   [ 'Andrew', 'Ann', 'Bernard' ],
//   [ 'Cris', 'Josh', 'Mark' ],
//   [ 'Peter', 'Sam', 'Sandra' ],
//   'Оставшиеся студенты: Takesi'
// ]
// Если убрать одно студента из списка, то результат будет:
// [
//   [ 'Andrew', 'Ann', 'Bernard' ],
//   [ 'Cris', 'Josh', 'Mark' ],
//   [ 'Peter', 'Sam', 'Sandra' ],
//   'Оставшиеся студенты: -'
// ]
// А если добавить одного, то:
// [
//   [ 'Andrew', 'Ann', 'Bernard' ],
//   [ 'Cris', 'Josh', 'Mark' ],
//   [ 'Peter', 'Sam', 'Sandra' ],
//   'Оставшиеся студенты: Takesi, Somebody'
// ]
// То есть, меняется содержимое строки. Все оставшиеся ученики попадают туда.

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', ];

function sortStudentsByGroups(arr) {
    let game = arr.map(item => item).sort()
    let command = []
    command.push(game.splice(0, 3), game.splice(0, 3), game.splice(0, 3))
    if(game.length > 0) {
        command.push(`Оставшиеся студенты: ${game.slice()}`)
    } else {
        command.push(`Оставшиеся студенты: - `)
    }
    
    return command
}

console.log(sortStudentsByGroups(students))

// 1) Функция isOpen не хочет правильно работать. Что мы уже не пробовали подставлять в неё - результат все время неправильный. Необходимо найти причины и исправить.
// 2) Функция isAverageLunchPriceTrue должна брать цены двух любых блюд из меню, складывать их и сравнивать с средним чеком (averageLunchPrice).
// Сейчас функция работает, но постоянно выдает неправильный результат. Ведь из представленного меню сумма двух любых цен всегда будет больше 20. Необходимо найти причину и исправить.
// 3) Функция transferWaitors создана для того, чтобы копировать шаблон данных и передавать их в другой ресторан. Конечно, в другом ресторане будут другие блюда, другие официанты и тп. Сейчас эта функция только в начале разработки и должна менять данные про официантов.
// Но в нынешнем виде мы обнаружили, что после её запуска не только копия данных содержит новых официантов, но и основные данные! В restorantData сотрудник Alice исчезает и заменяется Mike! Необходимо найти причину и немедленно исправить, чтобы данные были разделены.


const restorantData = {
    menu: [
        {
            name: 'Salad Caesar',
            price: '14$'
        },
        {
            name: 'Pizza Diavola',
            price: '9$'
        },
        {
            name: 'Beefsteak',
            price: '17$'
        },
        {
            name: 'Napoleon',
            price: '7$'
        }
    ],
    waitors: [
        {name: 'Alice', age: 22}, {name: 'John', age: 24}
    ],
    averageLunchPrice: '20$',
    openNow: true
};

function isOpen(prop) {
    let answer = '';
    prop ? answer = 'Закрыто' : answer = 'Открыто';

    return answer;
}
// console.log(isOpen(restorantData.openNow)) 

function isAverageLunchPriceTrue(fDish, sDish, average) {
    if (+fDish.price.slice(0, -1) + (sDish.price) < average) {
        return 'Цена выше средней';
    } else {
        return 'Цена ниже средней';
    }
}

// console.log(isAverageLunchPriceTrue(restorantData.menu[1], restorantData.menu[3], restorantData.averageLunchPrice));

function transferWaitors(data) {
    const copy = Object.assign({}, data);

    copy.waitors = [{name: 'Mike', age: 32}];
    return copy;
}

console.log(transferWaitors(restorantData));
console.log(restorantData.waitors)
