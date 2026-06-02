
/*
const number1 = 40
const number2 = 40

if (number1 != number2){
    console.log("Sim, são diferentes")
}

else {
    console.log("Não, eles não são diferentes")
}


//continua//

const number3 = 25
const number4 = 28

if (number3 >= number4){
    console.log("Sim, ele é maior ou igual")
}

else {
    console.log("Não, ele não é maior ou igual")
}
*/

/* exemplo de cronometro


let number = 0
let cron
let h1 = document.querySelector("h1")

function start(){
    cron = setInterval(function (){
        number++
        h1.innerHTML = number
    }, 1000)
}

function stop(){
    clearInterval(cron)
}

*/
/*
for (let i = 0; i < 15; i++) {
    console.log(i)
}
*/

/*

const users = ['maria', 'joao', 'pedro', 'paulo', 'ana']

for (let i = 0; i < users.length; i++) {
    console.log(users[i])
}

*/


/* ESTRUTURA WHILE=(se for TRUE ele executa)
/*
let i = 0

while (i < 8) {
    i++;
    console.log(i)
}
*/
/*DOWHILE=(executa depois verifica se é TRUE) 
do {
    i++;
    console.log(i)
} while (i < 8);
*/

/* ESTRUTURA DE REPETIÇÃO 'FOREACH' (ITEM, INDEX, ARRAY) */

const user = [
    {name: 'jose wilson', age: 39, contact: '(64)99247-3698'},
    {name: 'ana', age: 36, contact: '(64)99242-3698'},
    {name: 'pedro', age: 18, contact: '(64)99244-3698'},
    {name: 'joao', age: 42, contact: '(64)99241-3698'},
    {name: 'maira', age: 23, contact: '(64)99240-3698'},
    {name: 'antonio', age: 25, contact: '(64)99243-3698'},
]

user.forEach(function(item, index) {
    console.log(`name: ${item.name}, age: ${item.age}, contact: ${item.contact}`)
   
}
)

