
const container = document.getElementById('container')

let divs = []

let ship1 = []
let ship2 = []
let ship3 = []





generateTable()

function generateTable(){

    for (let i = 0; i < 100; i++) {
        let div = document.createElement('div')
        div.setAttribute('id', i)
        divs.push(div)
        // div.addEventListener('click' shoot)
        container.appendChild(div)
    }
    generateShip1()
    generateShip2()
    generateShip2()
}

function generateShip1() {
    let randomStart = Math.floor(Math.random() * 70)
    let numbers = []
    for (let x = 0; x < 99; x += 10) {
        for (let y = 0; y <= 6; y++) {
            let number = x + y
            numbers.push(number)
        }
    }
    if (Math.random() > 0.5) {
        divs[numbers[randomStart]].classList.add('ship4length')
        ship1.push(numbers[randomStart])
        divs[numbers[randomStart] + 1].classList.add('ship4length')
        ship1.push(numbers[randomStart] + 1)
        divs[numbers[randomStart] + 2].classList.add('ship4length')
        ship1.push(numbers[randomStart] + 2)
        divs[numbers[randomStart] + 3].classList.add('ship4length')
        ship1.push(numbers[randomStart] + 3)

        console.log(ship1)

    }
    else {
        if (randomStart < 70) {
            divs[randomStart].classList.add('ship4length')
            ship1.push(numbers[randomStart])
            divs[randomStart + 10].classList.add('ship4length')
            ship1.push(numbers[randomStart] + 10)
            divs[randomStart + 20].classList.add('ship4length')
            ship1.push(numbers[randomStart] + 20)
            divs[randomStart + 30].classList.add('ship4length')
            ship1.push(numbers[randomStart] + 30)
            console.log(ship1)
        }
    }
}

function generateShip2() {
    let randomStart = Math.floor(Math.random() * 70)
    let numbers = []
    for (let x = 0; x < 99; x += 10) {
        for (let y = 0; y <= 7; y++) {
            let number = x + y
            numbers.push(number)

        }
    }
    numbers = numbers.filter (x => x!==)
    if(Math.random() > 0.5) {
        divs[numbers[randomStart]].classList.add('ship3length')
        ship2.push(numbers[randomStart])
        divs[numbers[randomStart] + 1].classList.add('ship3length')
        ship2.push(numbers[randomStart] + 1)
        divs[numbers[randomStart] + 2].classList.add('ship3length')
        ship2.push(numbers[randomStart] + 2)
        console.log(ship2)

    }
    else {
        if (randomStart < 70) {
            divs[randomStart].classList.add('ship3length')
            ship2.push(numbers[randomStart])
            divs[randomStart + 10].classList.add('ship3length')
            ship2.push(numbers[randomStart] + 10)
            divs[randomStart + 20].classList.add('ship3length')
            ship2.push(numbers[randomStart] + 20)
            console.log(ship2)
        }
    }
}






