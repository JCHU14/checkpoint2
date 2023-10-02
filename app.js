

let clickUpgrades = [
    {
        name: 'click',
        price: 50,
        quantity: 0,
        multiplier: 1
    },

    {
        name: 'cutter',
        price: 100,
        quantity: 0,
        multiplier: 5
    }
];

let automaticUpgrades = [
    {
        name: 'carver',
        price: 1000,
        quantity: 0,
        multiplier: 10
    },

    {
        name: 'scooper',
        price: 5000,
        quantity: 0,
        multiplier: 100
    }
];

let clickValue = 1;
let pumpkin = 10000;
let clickValueText = clickValue

function addPumpkin() {
    pumpkin += (clickValue * 1)

    drawPumpkins()
}


function mine() {

    clickUpgrades.forEach(clickUpgrade => {
        if (clickUpgrade.quantity >= 0) {
            const mineMultiplier = (clickUpgrade.multiplier * clickUpgrade.quantity)
            clickValue = mineMultiplier

        }
    })
    console.log(clickValue);

    drawPumpkins()
}

function drawPumpkins() {
    let pumpkinAmount = document.getElementById('pumpkin amount')
    pumpkinAmount.innerText = pumpkin.toFixed('0')

    let clickValueText = document.getElementById('click amount')
    clickValueText.innerText = clickValue.toString()

    let autoValueText = document.getElementById('auto amount')
    autoValueText.innerText = autoValue.toString()

}

function buyClick() {
    foundName = clickUpgrades.find(clickUpgrade => clickUpgrade.name == 'click')
    if (pumpkin >= foundName.price) {
        foundName.quantity++
        clickValue++
        foundName.price *= 1.2;
        console.log('click', foundName);
        pumpkin -= foundName.price
    }
}

function buyCutter() {
    foundName = clickUpgrades.find(clickUpgrade => clickUpgrade.name == 'cutter')
    if (pumpkin >= foundName.price) {
        foundName.quantity++
        foundName.price *= 1.1;
        console.log('cutter', foundName);
        pumpkin -= foundName.price
        mine()
    }
    drawPumpkins()
}





function buyScooper2() {
    const nameFound = automaticUpgrades.find(automaticUpgrades => automaticUpgrades.name == 'scooper')
    if (pumpkin >= nameFound.price) {
        nameFound.quantity++
        nameFound.price *= 1.1;
        console.log('scooper', nameFound);
        pumpkin -= nameFound.price
    }
    drawPumpkins()
}




function buyCarver2() {
    nameFound = automaticUpgrades.find(automaticUpgrades => automaticUpgrades.name == 'carver')
    if (pumpkin >= nameFound.price) {
        nameFound.quantity++
        nameFound.price *= 1.2;
        console.log('carver', nameFound);
        pumpkin -= nameFound.price
    }
    drawPumpkins()
}




let autoValue = 0

function collectAutoUpgrades() {

    automaticUpgrades.forEach(automaticUpgrade => {
        if (automaticUpgrade.quantity >= 1) {
            const autoMultiplier = (automaticUpgrade.multiplier * automaticUpgrade.quantity)
            autoValue = autoMultiplier

        }

        console.log(autoValue)
    })


    drawPumpkins()
    modify()
}


function modify() {
    pumpkin += autoValue
}





setInterval(collectAutoUpgrades, 1000);
drawPumpkins()


