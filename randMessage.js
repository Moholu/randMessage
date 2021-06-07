const arr1 = [
    'El',
    'La',
    'Los',
    'Las'
]

const arr2 = [
    'sol',
    'luna',
    'estrella',
    'galaxia'
]

const arr3 = [
    'es grande',
    'es unico',
    'es bella',
    'es todo'
]

const randIndex = () => {
    return Math.floor(Math.random() * 4)
}

const randMessage = (arr1, arr2, arr3) => {
    return arr1[randIndex()] + ' ' + arr2[randIndex()] + ' ' + arr3[randIndex()]
}

console.log(randMessage(arr1, arr2, arr3))