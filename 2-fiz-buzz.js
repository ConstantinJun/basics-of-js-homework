/**
 * FIZZ_BUZZ
 *
 * to run code from this file use: npx nodemon 2-fiz-buzz
 *
 * Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions.
 * For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.
 *
 * When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5
 * (and still print "Fizz" or "Buzz" for numbers divisible by only one of those)
 *
 *
 */

// Your code here.
// let i = 0;
// do{
//     let divisibleByThree = i%3;
//     let divisibleByFive = i%5;
//     if(divisibleByThree ===0 && divisibleByFive === 0){
//         console.log('FizzBuzz')
//     } else if(divisibleByThree === 0){
//         console.log('Fizz')
//     } else if(divisibleByFive === 0) {
//         console.log('Buzz')
//     }else{console.log(i)}
    

   
//     i++
// }
// while (i < 100);



//     for(i=0;i<=100; i++){
//     if(divisibleByThree ===0 && divisibleByFive === 0){
//                 console.log('FizzBuzz')
//             } else if(divisibleByThree === 0){
//                 console.log('Fizz')
//             } else if(divisibleByFive === 0) {
//                 console.log('Buzz')
//             }else{console.log(i)}
            
// }


for(let i=0;i<=100;i++){
    let divisibleByThree = i%3;
    let divisibleByFive = i%5;

switch(true){
    case(divisibleByThree ===0 && divisibleByFive === 0):
    console.log('FizzBuzz: '+i);
    break;
    case(divisibleByThree === 0):
    console.log('Fizz: '+i);
    break;
    case(divisibleByFive === 0):
    console.log('Buzz: '+i);
    break;
    default:
        console.log(i);
        break
}
}