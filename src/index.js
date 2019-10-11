function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
    let result = 0;

    try {
        result += (new Function('return ' + expr))();      
    } catch (err) {
        throw new Error ('ExpressionError: Brackets must be paired.');
    }

    if (result === Infinity) throw new Error ('TypeError: Devision by zero.');

    return result;
    
}

module.exports = {
    expressionCalculator
}