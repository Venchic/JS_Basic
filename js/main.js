/*
*   Task 1
*/
//пример 1
let a = 1, b = 1, c, d;
/*
* Инкремент выполняется до присваивания, соответсвенно, 1 инкрементируется, становится 2, 
* а 2 записывается в "с";
*/
c = ++a;
alert(c); // ответ: 2
//пример 2
/*
* Инкремент выполняется после присваивания,соответственно, в переменную "d" попадает значение 1, 
* присвоенное в примере 1, а переменная b инкрементирует и становится 2;
*/
d = b++;
alert(d); //ответ: 1
//пример 3
/*
* Инкремент выполняется до присваивания, соответсвенно, 2 инкрементируется, становится 3, 
* а 2 + 3 будет 5;
*/
c = 2 + ++a;
alert(c); //ответ: 5
//пример 4
/*
* Инкремент выполняется после присваивания,соответственно, переменная "b" имеет значение 2, 
* 2 + 2 = 4, 4 присваивается "x", а "b" становится 3;
*/
d = 2 + b++;
alert(d); //ответ: 4
alert(a); //3
alert(b); //3

/*
*   Task 2
*/
// С присвоением все понятно;
a = 2;
/*
* Действие в скобках приоритетней. Соответственно, можно представить выражение в скобках, 
* как a = a * 2, соответственно, в переменной "а"теперь 4, а в "х" - 5;
*/
let x = 1 + (a *= 2);
console.log(x);

/*
*   Task 3
*/
a = 5;
b = -4;

if (a > 0 && b > 0) {
    console.log(a - b);
} else if (a < 0 && b < 0) {
    console.log(a * b);
} else if (a > 0 && b < 0 || a < 0 && b > 0) {
    console.log(a + b);
}
/*
*   Task 4
*/
function sum(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function div(a, b) {
    return a / b;
}

function mult(a, b) {
    return a + b;
}
/*
*   Task 5
*/

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
            case 'Сложение':
                return arg1 + arg2;
                break;
            case 'Вычитание':
                return arg1 - arg2;
                break;
            case 'Деление':
                return arg1 / arg2;
                break;
            case 'Умножение':
                return arg1 * arg2;
             break;
    }
}
/*
*   Task 6
*/