function move(position, roll) {
    let stepsToMove = roll * 2;

    let newPosition = position + stepsToMove;

    return newPosition;
}
console.log(move(3, 6)); // Output: 15
console.log(move(0, 2)); // Output: 4
console.log(move(10, 3)); // Output: 16
