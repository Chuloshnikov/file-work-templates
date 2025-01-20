const buf1 = new Buffer.alloc(1024, 1, 'utf-8');
const buf = new Buffer.alloc(5, 'a', 'ascii');
//alloc допускает методы кодирования 
const stringBuf = new Buffer.from('Some string');
const stringBuf1 = new Buffer.from('NO!');
const bufCopy = new Buffer.from(buf);
const tenZero = new Buffer.alloc(10, 0);

stringBuf1[1] = 121;
stringBuf1[2] = 147;

stringBuf.write('Not the same text what you expect'); //при изменении содержания буфера его длина не изменяется\


const emptyBuf = new Buffer.from('There is nothing here');
const tarantinoBuf = new Buffer.from('Tito and Tarantula');
emptyBuf.copy(tarantinoBuf);
emptyBuf.copy(tarantinoBuf, 0, 4, emptyBuf.length);

console.log(buf);
console.log(stringBuf, bufCopy);
console.log(stringBuf[0]);
console.log(stringBuf[50]);
console.log(stringBuf.toString());
console.log(stringBuf.toString('hex')); //шестнадцатеричное представление
console.log(bufCopy.toString('utf8'));
console.log(stringBuf.toJSON());
console.log(tenZero.toJSON());
console.log(stringBuf1.toString());
console.log(tarantinoBuf.toString());
console.log(buf1);