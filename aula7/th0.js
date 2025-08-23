//Operações em JavaScript

//Aritmeticos

var a = 5 + 3
var b = a % 5
var c = 5 * b ** 2
var d = 10 - a / 2
var e = 6 * 2 / d
var f = b % e + 4 / e

console.log( a, b, c, d, e, f)

//Auto-atribuição

var n = 3
n += 4   // n = n + 4    == 7
n -= 5   // n = n - 5    == 2
n *= 4   // n = n * 4    == 8
n /= 2   // n = n / 2    == 4
n **= 2  // n = n ** 2   == 16
n %= 5   // n = n % 5    == 1

console.log(n)

// pós-incremento e pré-incremento (ordens diferentes)
//pós-incremento:
var num1 = 5

num1++   // num1 + 1
console.log(num1)

num1--   // num1 - 1
console.log(num1)

//pré-incremento:
var num2 = 5

++num2  // 1 + num2
console.log(num2)

--num2  // 1 - num2
console.log(num2)