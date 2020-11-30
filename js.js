
const container = document.getElementById('container')

let divs = []

let ships = []

let forShip4 = []
let forShip3 = []
let forShip2 = []

let randomStart = Math.abs(Math.floor(Math.random() * 70 - ships.length))

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
    generateShip3()
    generateShip3()
    generateShip3()
    generateShip4()
    generateShip4()
    generateShip4()
    generateShip4()
}

function generateShip1() {
    let numbers = []
    for (let x = 0; x < 99; x += 10) {
        for (let y = 0; y <= 6; y++) {
            let number = x + y
            numbers.push(number)
        }
    }

    if (Math.random() > 0.5) {
        // console.log(numbers[randomStart])
        divs[numbers[randomStart]].classList.add('ship4length')
        ships.push(numbers[randomStart])
        forShip4.push(numbers[randomStart] - 1)
        forShip3.push(numbers[randomStart] - 2)
        forShip2.push(numbers[randomStart] - 3)
        forShip4.push(numbers[randomStart] + 10)
        forShip4.push(numbers[randomStart] - 10)
        forShip3.push(numbers[randomStart] - 20)
        forShip2.push(numbers[randomStart] - 30)
        divs[numbers[randomStart] + 1].classList.add('ship4length')
        ships.push(numbers[randomStart] + 1)
        forShip4.push(numbers[randomStart] + 11)
        forShip4.push(numbers[randomStart] - 11)
        forShip3.push(numbers[randomStart] - 21)
        forShip2.push(numbers[randomStart] - 31)
        divs[numbers[randomStart] + 2].classList.add('ship4length')
        ships.push(numbers[randomStart] + 2)
        forShip4.push(numbers[randomStart] + 12)
        forShip4.push(numbers[randomStart] - 12)
        forShip3.push(numbers[randomStart] - 22)
        forShip2.push(numbers[randomStart] - 32)
        divs[numbers[randomStart] + 3].classList.add('ship4length')
        ships.push(numbers[randomStart] + 3)
        forShip4.push(numbers[randomStart] + 4)
        forShip4.push(numbers[randomStart] + 13)
        forShip4.push(numbers[randomStart] - 13)
        forShip3.push(numbers[randomStart] - 23)
        forShip2.push(numbers[randomStart] - 33)
        // console.log(ships)
    }
    else {
            // console.log(numbers)
            divs[randomStart].classList.add('ship4length')
            ships.push(randomStart)
            // console.log(randomStart)
            forShip4.push(randomStart - 1)
            forShip3.push(randomStart - 2)
            forShip2.push(randomStart - 3)
            forShip4.push(randomStart - 10)
            forShip3.push(randomStart - 20)
            forShip2.push(randomStart - 30)
            divs[randomStart + 10].classList.add('ship4length')
            ships.push(randomStart + 10)
            forShip4.push(randomStart + 9)
            forShip3.push(randomStart + 8)
            forShip2.push(randomStart + 7)
            forShip4.push(randomStart + 11)
            divs[randomStart + 20].classList.add('ship4length')
            ships.push(randomStart + 20)
            forShip4.push(randomStart + 19)
            forShip3.push(randomStart + 18)
            forShip2.push(randomStart + 17)
            forShip4.push(randomStart + 21)
            divs[randomStart + 30].classList.add('ship4length')
            ships.push(randomStart + 30)
            forShip4.push(randomStart + 40)
            forShip4.push(randomStart + 29)
            forShip3.push(randomStart + 28)
            forShip2.push(randomStart + 27)
            forShip4.push(randomStart + 31)
            // console.log(ships)
        }
    console.log(forShip4)
}

function generateShip2() {

    let numbers = []
    for (let x = 0; x < 99; x += 10) {
        for (let y = 0; y <= 7; y++) {
            let number = x + y
            numbers.push(number)
        }
    }
    let filteredNumbers = numbers.filter(f => !ships.includes(f))
    // console.log(randomStart)
    let lessThan80 = filteredNumbers.filter(x => x < 80 )
    // console.log(ships)
    // console.log(filteredNumbers)
    if (Math.random() > 0.5) {
        // console.log(filteredNumbers[randomStart])
        divs[filteredNumbers[randomStart]].classList.add('ship3length')
        ships.push(filteredNumbers[randomStart])
        ships.push(filteredNumbers[randomStart] - 1)
        ships.push(filteredNumbers[randomStart] - 2)
        ships.push(filteredNumbers[randomStart] + 10)
        ships.push(filteredNumbers[randomStart] - 10)
        ships.push(filteredNumbers[randomStart] - 20)
        divs[filteredNumbers[randomStart] + 1].classList.add('ship3length')
        ships.push(filteredNumbers[randomStart] + 1)
        ships.push(filteredNumbers[randomStart] + 11)
        ships.push(filteredNumbers[randomStart] - 11)
        ships.push(filteredNumbers[randomStart] - 21)
        divs[filteredNumbers[randomStart] + 2].classList.add('ship3length')
        ships.push(filteredNumbers[randomStart] + 2)
        ships.push(filteredNumbers[randomStart] + 3)
        ships.push(filteredNumbers[randomStart] + 12)
        ships.push(filteredNumbers[randomStart] - 12)
        ships.push(filteredNumbers[randomStart] - 22)
        // console.log(ships)

    } else {
            divs[lessThan80[randomStart]].classList.add('ship3length')
            // console.log(lessThan80[randomStart])
            ships.push(lessThan80[randomStart])
            ships.push(lessThan80[randomStart] - 1)
            ships.push(lessThan80[randomStart] - 2)
            ships.push(lessThan80[randomStart] - 10)
            ships.push(lessThan80[randomStart] - 20)
            divs[lessThan80[randomStart] + 10].classList.add('ship3length')
            ships.push(lessThan80[randomStart] + 10)
            ships.push(lessThan80[randomStart] + 19)
            ships.push(lessThan80[randomStart] + 18)
            ships.push(lessThan80[randomStart] + 17)
            ships.push(lessThan80[randomStart] + 21)
            divs[lessThan80[randomStart] + 20].classList.add('ship3length')
            ships.push(lessThan80[randomStart] + 20)
            ships.push(lessThan80[randomStart] + 29)
            ships.push(lessThan80[randomStart] + 28)
            ships.push(lessThan80[randomStart] + 27)
            ships.push(lessThan80[randomStart] + 31)
            // console.log(ships)
        }
}

function generateShip3() {

    let numbers = []
    for (let x = 0; x < 99; x += 10) {
        for (let y = 0; y <= 8; y++) {
            let number = x + y
            numbers.push(number)
        }
    }
    let filteredNumbers = numbers.filter(f => !ships.includes(f))
    let lessThan90 = filteredNumbers.filter(x => x < 90 )
    // console.log(randomStart)
    // console.log(filteredNumbers)
    if (Math.random() > 0.5) {
        console.log(filteredNumbers[randomStart])
        divs[Math.abs(filteredNumbers[randomStart])].classList.add('ship2length')
        ships.push(filteredNumbers[randomStart])
        ships.push(filteredNumbers[randomStart] - 1)
        ships.push(filteredNumbers[randomStart] + 10)
        ships.push(filteredNumbers[randomStart] - 10)
        divs[filteredNumbers[randomStart] + 1].classList.add('ship2length')
        ships.push(filteredNumbers[randomStart] + 1)
        ships.push(filteredNumbers[randomStart] + 2)
        ships.push(filteredNumbers[randomStart] + 11)
        ships.push(filteredNumbers[randomStart] - 11)
        // console.log(ships)
    } else {
        divs[lessThan90[randomStart]].classList.add('ship2length')
        // console.log(lessThan90[randomStart])
        ships.push(lessThan90[randomStart])
        ships.push(lessThan90[randomStart] - 1)
        ships.push(lessThan90[randomStart] + 1)
        ships.push(lessThan90[randomStart] - 10)
        divs[lessThan90[randomStart] + 10].classList.add('ship2length')
        ships.push(lessThan90[randomStart] + 10)
        ships.push(lessThan90[randomStart] + 9)
        ships.push(lessThan90[randomStart] + 11)
        // console.log(ships)
    }
}

function generateShip4() {
    let randomStart = Math.abs(Math.floor(Math.random() * 70 - ships.length))
    let numbers = []
    for (let x = 0; x < 100; x ++) {
            numbers.push(x)
    }
    let filteredNumbers = numbers.filter(f => !ships.includes(f) && !forShip4.includes(f))
    let lessThan100 = filteredNumbers.filter(x => x < 100 )
    console.log(randomStart)
    console.log(filteredNumbers)
        divs[Math.abs(filteredNumbers[randomStart])].classList.add('ship1length')
        ships.push(filteredNumbers[randomStart] + 1)
        ships.push(filteredNumbers[randomStart] - 1)
        ships.push(filteredNumbers[randomStart] + 10)
        ships.push(filteredNumbers[randomStart] - 10)
        // console.log(ships)
}






