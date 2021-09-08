function choice(arr) {
    let coinFlip = Math.floor(Math.random() * arr.length);
    console.log(choice)
    return arr[coinFlip]
}

export { choice };