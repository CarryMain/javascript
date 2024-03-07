function disemvowel(str) {
    return str.split('').join('').replace(/[aeoyuiAEIOU]/g, '')
  }

console.log(disemvowel("No offense but,\nYour writing is among the worst I've ever read"))
// нужна чтобы функция принимала строку и возвращала результат без гласных букв

