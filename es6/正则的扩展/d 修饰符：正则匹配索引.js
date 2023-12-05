const text = 'zabbcdef';
const re = /ab/d;
const result = re.exec(text);

result.index // 1
result.indices // [ [1, 3] ]

const text = 'zabbcdef';
const re = /ab+(cd)/d;
const result = re.exec(text);

result.indices // [ [ 1, 6 ], [ 4, 6 ] ]

const text = 'zabbcdef';
const re = /ab+(cd(ef))/d;
const result = re.exec(text);

result.indices // [ [1, 8], [4, 8], [6, 8] ]

const text = 'zabbcdef';
const re = /ab+(?<Z>cd)/d;
const result = re.exec(text);

result.indices.groups // { Z: [ 4, 6 ] }

const text = 'zabbcdef';
const re = /ab+(?<Z>ce)?/d;
const result = re.exec(text);

result.indices[1] // undefined
result.indices.groups['Z'] // undefined