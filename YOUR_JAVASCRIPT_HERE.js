const hero = {
    name: 'SuperMeow',
    heroic: true,
    inventory: [],
    health: 10,
    weapon: {
        type: 'Yarn ball',
        damage: 2
    }
}

const innImg = document.getElementById('inn')
const daggerImg = document.getElementById('dagger')
const bagImg = document.getElementById('bag')
const stats = document.getElementById('stats')



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
    displayStats(heroObj)
}


innImg.addEventListener('click', () => {
    rest(hero)
    displayStats(hero)
    })

daggerImg.addEventListener('click', () => 
    pickUpItem(hero, {
    type: 'dagger',
    damage: 2
    })
)

bagImg.addEventListener('click', () => equipWeapon(hero))

const clearSection = (el) => {
    el.innerHTML = ''
}

const displayStats = (obj) => {

    clearSection(stats)
    const markup = `
        <h1>${obj.name}</h1><button onclick="changeName(hero)">Change name</button>
        <p>Health: ${obj.health}</p>
        <p>Weapon type: ${obj.weapon.type}</p>
        <p>Weapon damage: ${obj.weapon.damage}</p>
    `
    stats.insertAdjacentHTML('beforeend', markup)
}

const changeName = (heroObj) => {
    const newName = prompt("Please fill in new name for your hero", "Meow")
    if (newName == null || newName.trim() == "") {
        alert('Please fill in correct name')
    } else {
        heroObj.name = newName
        displayStats(heroObj)
    }
}
displayStats(hero)






















