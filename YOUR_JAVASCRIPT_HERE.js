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

const enemy = {
    name: 'Ratty',
    heroic: true,
    inventory: [],
    health: 9,
    weapon: {
        type: 'Cheese stick',
        damage: 1
    }
}

const innImg = document.getElementById('inn')
const daggerImg = document.getElementById('dagger')
const bagImg = document.getElementById('bag')
const statsHero = document.getElementById('statsHero')
const statsEnemy = document.getElementById('statsEnemy')
const enemyBox = document.getElementById('enemyBox')
const enemyWeapon = document.getElementById('enemyWeapon')
const enemyImage = document.getElementById('enemyImg')
const enemyHouse = document.getElementById('enemyHouse')
const enemyChest = document.getElementById('enemyChest')

const rest = (obj) => {
    obj.health = 10
    return obj
}

const pickUpItem = (heroObj, obj) => {
    heroObj.inventory.push(obj)
}

const equipWeapon = (heroObj) => {
    if (heroObj.inventory.length === 0) {
        return
    }

    heroObj.weapon = heroObj.inventory[0]
}

const clearSection = (el) => {
    el.innerHTML = ''
}

const displayStats = (obj, stats) => {

    clearSection(stats)
    const markup = `
        <h1>${obj.name}</h1>
        <p>Health: ${obj.health}</p>
        <p>Weapon type: ${obj.weapon.type}</p>
        <p>Weapon damage: ${obj.weapon.damage}</p>
    `
    stats.insertAdjacentHTML('beforeend', markup)
}

const changeName = (heroObj, name, stats) => {
    const newName = prompt("Please fill in new name for your hero", name)

    if (newName == null || newName.trim() == "") {
        alert('Please fill in correct name')
        return
    }

    heroObj.name = newName
    displayStats(heroObj, stats)
}

const attack = (obj, objAttacked) => {

    if (obj.health <= 0) {
        alert(`${obj.name} can't attack, because he is dead`)
        return
    } 

    if (objAttacked.health <= 0) {
        alert(`${objAttacked.name} can't be attacked, because he is dead`)
        return
    }

    objAttacked.health -= obj.weapon.damage
    displayStats(hero, statsHero)
    displayStats(enemy, statsEnemy)

    if (objAttacked.health <= 0) {
        alert(`${obj.name} just killed ${objAttacked.name} with a ${obj.weapon.type}`)
    } 
}

innImg.addEventListener('click', () => {
    rest(hero)
    displayStats(hero, statsHero)
})

daggerImg.addEventListener('click', () => {
    pickUpItem(hero, {
        type: 'dagger',
        damage: 2
    })

    daggerImg.parentNode.removeChild(daggerImg)
})

bagImg.addEventListener('click', () => {
    equipWeapon(hero)
    displayStats(hero, statsHero)
})

enemyWeapon.addEventListener('click', () => {
    pickUpItem(enemy, {
        type: 'Water Spray',
        damage: 3
    })
    enemyWeapon.parentNode.removeChild(enemyWeapon)
})

enemyImage.addEventListener('click', () => clearSection(enemyBox))

enemyHouse.addEventListener('click', () => {
    rest(enemy)
    displayStats(enemy, statsEnemy)
})

enemyChest.addEventListener('click', () => {
    equipWeapon(enemy)
    displayStats(enemy, statsEnemy)
})

displayStats(hero, statsHero)
displayStats(enemy, statsEnemy)
