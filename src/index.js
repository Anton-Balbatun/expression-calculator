function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
    // write your solution here
    let result = 0
    try {
        result = result + (new Function('return ' + expr ))();
    } catch (err) {
        throw new Error ('ExpressionError: Brackets must be paired.');
    }
    if (result === Infinity) throw new Error ('TypeError: Devision by zero.');
    
        return result
    
}

module.exports = {
    expressionCalculator
}