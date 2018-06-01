
// TODO: Failing some tests - needs work 😃
// My median calculation I think is too expensive

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function calculateMedian(pastValues) {
    pastValues.sort((a, b) => a - b)
    const middle = Math.floor(pastValues.length / 2)

    if (pastValues.length % 2) {
        return pastValues[middle]
    } else {
        return (pastValues[middle - 1] + pastValues[middle]) / 2.0
    }
}

function activityNotifications(expenditure, d) {
    let notifications = 0
    let median = 0
    let upper = d
    let lower = 0
    
    while (upper < expenditure.length) {
        median = calculateMedian(expenditure.slice(lower, upper))
        if (expenditure[upper] >= median * 2) {
            notifications++
        }
        lower++
        upper++
    }
    return notifications
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nd = readLine().split(' ');

    const n = parseInt(nd[0], 10);

    const d = parseInt(nd[1], 10);

    const expenditure = readLine().split(' ').map(expenditureTemp => parseInt(expenditureTemp, 10));

    let result = activityNotifications(expenditure, d);

    ws.write(result + "\n");

    ws.end();
}
