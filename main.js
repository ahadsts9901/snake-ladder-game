//audio function

function audio() {

    document.getElementById('audio').play()

}

//dice 1 function

function dice1(event) {

    {
        event.preventDefault()
    }

    let Dice1 = ""

    let number = Math.random(Dice1) * 6
    number = Number.parseInt(number)

    if (number === 0) {

        document.querySelector('#dice-1').innerHTML = '<i class="bi bi-dice-1 icon"></i>'

    } else if (number === 1) {

        document.querySelector('#dice-1').innerHTML = '<i class="bi bi-dice-2 icon"></i>'

    } else if (number === 2) {

        document.querySelector('#dice-1').innerHTML = '<i class="bi bi-dice-3 icon"></i>'

    } else if (number === 3) {

        document.querySelector('#dice-1').innerHTML = '<i class="bi bi-dice-4 icon"></i>'

    } else if (number === 4) {

        document.querySelector('#dice-1').innerHTML = '<i class="bi bi-dice-5 icon"></i>'

    } else {

        document.querySelector('#dice-1').innerHTML = '<i class="bi bi-dice-6 icon"></i>'

    }

}

// dice 2 function

function dice2(event) {

    {
        event.preventDefault()
    }

    let Dice2 = ""

    let number = Math.random(Dice2) * 6
    number = Number.parseInt(number)

    if (number === 0) {

        document.querySelector('#dice-2').innerHTML = '<i class="bi bi-dice-1-fill icon"></i>'

    } else if (number === 1) {

        document.querySelector('#dice-2').innerHTML = '<i class="bi bi-dice-2-fill icon"></i>'

    } else if (number === 2) {

        document.querySelector('#dice-2').innerHTML = '<i class="bi bi-dice-3-fill icon"></i>'

    } else if (number === 3) {

        document.querySelector('#dice-2').innerHTML = '<i class="bi bi-dice-4-fill icon"></i>'

    } else if (number === 4) {

        document.querySelector('#dice-2').innerHTML = '<i class="bi bi-dice-5-fill icon"></i>'

    } else {

        document.querySelector('#dice-2').innerHTML = '<i class="bi bi-dice-6-fill icon"></i>'

    }

}