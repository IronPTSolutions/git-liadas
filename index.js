const math = require('./lib/math');
const N = 2;
const M = 2;


console.info(`${N} + ${M} = ${math.sum(N, M)}`);
console.info(`${N} * ${M} = ${math.mul(N, M)}`);
console.info(`${N} / ${M} = ${math.div(N, M)}`);