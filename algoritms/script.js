// linearSearch 
const arr = [1,2,1,1,19,32,1243,121,12,432,54,32,12,5325,5,345, 'Arseniy']

function linearSearch(element, arr) { 
    let n = arr.length, i = 0;
    arr[n] = element
    while(arr[i] !== element) i++;
    if(i < n) return i
    else return -1
}

console.log(linearSearch('12', arr)) // return number of array 

// binarySearch this search constantly divides the array by 2

const arrtwo = [1,2,1,1,19,32,1243,121,12,432,54,32,12,5325,5,345, 'Arseniy']
function binarySearch(element, arr) { 
    let i = 0, j = arr.length-1, k;

    while( i <= j) { 
        k = Math.floor((i + j) / 2)
        if(element === arr[k]) return k 
        else if ( element < arr[k]) j = k - 1
        else i = k + 1
    }
    return -1
}
arrtwo.sort(function(a, b) { // sorted by array 
    return a - b
})
console.log(binarySearch(432, arrtwo))

// interpolationSearch Рассмотрим алгоритм поиска в отсортированном массиве, который называется интерполирующим поиском (interpolation search). В отличие от бинарного поиска, который всегда сравнивает ключ поиска со средним значением отсортированного массива (а следовательно, всегда уменьшает размер задачи вдвое), интерполяционный поиск учитывает значение ключа поиска при определении элемента массива, который будет сравниваться с ключом. В определенном смысле алгоритм имитирует поиск имени в телефонной книге. Если мы ищем в телефонной книге, например, Иванов — вряд ли мы будем открывать ее в средине или ближе к концу, как поступили бы при поиске Петрова.
const telephoneDirectory = ['Ruslan', 'Baklan', 'Kirill', 'Anastasiya', 'Mahno', 'Parasha', 'Sinsobaky', 'Mikhail', 'Melena', 'Magdalena', 'Elena', 'Petr'];

function interpolationSearch(element, arr) {
    let mid, low = 0, high = arr.length - 1;

    while( arr[low] < element && arr[high] > element) {
        mid = low + Math.floor( ((element - arr[low]) / (arr[high] - arr[low])) * (high - low))
        if(arr[mid] < element) low = mid + 1
        else if (arr[mid] > element) high = mid - 1
        else return mid;
    }

    if(arr[low] === element) return low
    else if (arr[high] === element) return high
    else return - 1
}

telephoneDirectory.sort();
console.log(interpolationSearch('Ruslan', telephoneDirectory));

//substringSearch 

let str = 'Hello, my name is Baklan, i am from Kazany'

function substringSearch(sub, str) { 
    let i, j, n = sub.length, N = str.length - n + 1;

    for(i = 0; i < N; i++) {
        j = 0
        while(j < n && sub.charAt(j) === str.charAt(i + j)) j++
        if(j === n) return i 
    }

    return -1
}

console.log(substringSearch('H', str))