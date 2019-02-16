const hero = {
    name: '',
    heroic: true,
    inventory: [],
    health: 10,
    weapon: {
        type: '',
        damage: 2
    }
}

const innImg = document.getElementById('inn')
const daggerImg = document.getElementById('dagger')
const bagImg = document.getElementById('bag')


const rest = (obj) => {
    obj.health = 10
    return obj
}

const pickUpItem = (heroObj, obj) => {
    heroObj.inventory.push(obj)
}

const equipWeapon = (heroObj) => {

    if (heroObj.inventory.length > 0) {
        heroObj.weapon = heroObj.inventory[0]
    }
}


innImg.addEventListener('click', () => rest(hero))

daggerImg.addEventListener('click', () => 
    pickUpItem(hero, {
    type: 'dagger',
    damage: 2
    })
)

bagImg.addEventListener('click', () => equipWeapon(hero))




