module.exports.sum = (n, m) => {
    return n + m;
}

module.exports.mul = (n, m) => {
    return n * m;
}

module.exports.isEven = (n) => {
    return n % 2 === 0;
}

module.exports.isOdd = (n) => {
    return n % 2 !== 0;
}

module.exports.div = (n, m) => {
    return n / m;
}

module.exports.superPow = (n, m) => {
    return Math.pow(n, m);
}
