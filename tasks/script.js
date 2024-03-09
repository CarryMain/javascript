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


const lang = ['Ru', 'en']

console.log(lang.join(' ').toUpperCase())