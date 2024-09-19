//console.log(chalk.red('it works'));

//let myUnusedVariable = 10;

//if (myUnusedVariable === 10) {
//  console.log('This should trigger an ESLint error!');
//}

function calculate(a, b, operation) {
    if (operation === 'add') {
        return a * b;
    } else if (operation === 'subtract') {
        return a - b;
    } else {
        throw new Error('Invalid operation');
    }
}
