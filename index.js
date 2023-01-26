//Вивести на сторінку в один рядок через кому числа від 10 до 20.
const arr = []
for(i=10; i<=20; i++){
    arr.push(i)
}
console.log(arr.join())

//Вивести квадрати чисел від 10 до 20.
for (let i in arr) {
    arr[i] = arr[i] ** 2;
  }
console.log(arr.join())


//Вивести таблицю множення на 7.
const arr1 = []
let k = 1
for(i=1; i<=10; i++){
    arr1.push(i)
}
for (let i in arr1){
    arr1[i] = arr1[i]*7;
    console.log(`${k++} * 7 = `+ arr1[i])
  }


//Знайти суму всіх цілих чисел від 1 до 15.
const arr2 = []
for(i=1; i<=15; i++){
    arr2.push(i)
}
let gg = arr2.reduce(function(sum, elem) {
	return sum + elem;
}, 0);
console.log(gg);

//Знайти добуток усіх цілих чисел від 15 до 35.
const arr3 = []
for(i=15; i<=35; i++){
    arr3.push(i)
}
let gg1 = arr3.reduce((acc, rec) => acc * rec);
console.log(gg1);


//Знайти середнє арифметичне всіх цілих чисел від 1 до 500.
const arr4 = []
for(i=1; i<=500; i++){
    arr4.push(i)
}
let gg2 = arr4.reduce((partial_sum, a) => partial_sum + a, 0) / arr4.length;
console.log(gg2);


//Вивести суму лише парних чисел в діапазоні від 30 до 80.
const arr5 = []
for(i=30; i<=80; i++){
    arr5.push(i)
}
let gg3 = 0;
for (let i=0; i < arr5.length; i++){
    if (arr5[i] % 2 == 0){
        gg3 += arr5[i];
    }
}
console.log(gg3)

//Вивести всі числа в діапазоні від 100 до 200 кратні 3.

const arr6 = []
for(i=100; i<=200; i++){
    arr6.push(i)
}
let gg4 = 0;
for (let i=0; i < arr6.length; i++){
    if (arr6[i] % 3 == 0){
        gg4 += arr6[i];
    }
}
console.log(gg4)

//Дано натуральне число. Знайти та вивести на сторінку всі його дільники.
let q = 800; 
const arr7 = []
for (let i = 2; i * 2 <= q; i++) {
    if (q % i == 0) {
        arr7.push(i);
    }
}
console.log(arr7.join())
//Визначити кількість його парних дільників.
console.log(arr7.filter(i => i%2 == 0).length);
//Знайти суму його парних дільників.
let gg5 = 0;
for (let i=0; i < arr7.length; i++){
    if (arr7[i] % 2 == 0){
        gg5 += arr7[i];
    }
}
console.log(gg5)

//Надрукувати повну таблицю множення від 1 до 10.
const tablem = []
let a1 = 1,a2 = 1,a3 = 1,a4 = 1,a5 = 1,a6 = 1,a7 = 1,a8 = 1,a9 = 1;
for(i=1; i<=10; i++){
    tablem.push(i)
}
for (let i in tablem){
    tablem[i] = (`${a1++} * 2 = `+ tablem[i]*2)+' ||  '+(`${a2++} * 3 = `+ tablem[i]*3)+' ||  '+(`${a3++} * 4 = `+ tablem[i]*4)+' ||  '+(`${a4++} * 5 = `+ tablem[i]*5)+' ||  '+(`${a5++} * 6 = `+ tablem[i]*6)+' ||  '+(`${a6++} * 7 = `+ tablem[i]*7)+' ||  '+(`${a7++} * 8 = `+ tablem[i]*8)+' ||  '+(`${a8++} * 9 = `+ tablem[i]*9)+' ||  '+(`${a9++} * 10 = `+ tablem[i]*10)
    console.log(tablem[i])
  }

  