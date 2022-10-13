// Напишите условие if для проверки, что переменная age находится в диапазоне между 14 и 90 включительно.

// «Включительно» означает, что значение переменной age может быть равно 14 или 90.

// https://learn.javascript.ru/logical-operators#tasks

function canWatchPorn(age) {
    if (age < 14) {
        return false;
    } else if (age > 90) {
        return false;
    } else {
        return true;
    }
}

// function canWatchPorn(age, name, asd) { ...

// canWatchPorn(10, 'DD', 12323)

function canWatchPorn(age) {
    if (age >= 14 && age <= 90) {
        return true;
    } else {
        return false;
    }
}

// Перепишите функцию, используя оператор '?' или '||'
//важность: 4
//Следующая функция возвращает true, если параметр age больше 18.

//В ином случае она задаёт вопрос confirm и возвращает его результат.

function checkAge(age) {
    if (age >= 18) {
        return true;
    } else {
        return confirm('Родители разрешили?');
    }
}
//Перепишите функцию, чтобы она делала то же самое, но без if, в одну строку.

//Сделайте два варианта функции checkAge:

//Используя оператор ?
//Используя оператор ||

//РЕШЕНИЕ: 
function checkAge(age) {
    return (age > 18) ? true : confirm('Родители разрешили?');
}
//Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.
function min(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

//Перепишите с использованием функции-стрелки
//Замените код Function Expression стрелочной функцией:

function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

ask(
    "Вы согласны?",
    function() { alert("Вы согласились."); },
    function() { alert("Вы отменили выполнение."); }
);

//Решение:

ask(
    "Вы согласны?",
    () => alert("Вы согласились."),
    () => alert("Вы отменили выполнение.")
);