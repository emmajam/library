/**
 * https://www.hackerrank.com/challenges/mini-max-sum/problem
 */

'use strict';

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

function miniMax(arr, arrIndex) {
    let sum = 0
    arr.forEach((item, index) => {
        if (index !== arrIndex) {
            sum += item
        }
    })
    return sum
}

function miniMaxSum(arr) {
    let results = []
    let sum = 0
    let arrIndex = 0
    while (arrIndex < arr.length) {
        sum = miniMax(arr, arrIndex)
        results.push(sum)
        arrIndex++
    }
    let lowest = Math.max(...arr)
    let highest = Math.max(...arr)
    console.log('lowest - ', lowest, 'highest - ', highest)
}

function main() {
    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
