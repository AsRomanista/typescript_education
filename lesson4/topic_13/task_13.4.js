/*При помощи цикла for выведите чётные числа от 2 до 10.*/

for (let i = 2; i < 11; i++) {
    if (i % 2 !== 0) continue;
    console.log(i);
}