// // Coding using promise
// console.log('person1:shows ticket');
// console.log('person2:shows ticket');

// const promiseWifeBringsTickets = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('tickets');
//     }, 3000);
// })

// // After resoving promise it get called

// const getPopcorn = promiseWifeBringsTickets.then((t)=>{
//     console.log('wife:I have the tickets');
//     console.log('husband :we should go in');
//     console.log('wife:No I am hungry');
//     return new Promise((resolve, reject) => resolve(`${t} popcorn`))
// });

// const getButter = getPopcorn.then((t) =>{
//     console.log('husband : I got some popcorn');
//     console.log('husband : we should go in');
//     console.log('wife:I need butter on my popcorn');
//     return new Promise((resolve, reject) => resolve(`${t} butter`));
// });

// const getcoldDrinks =getButter.then((t) =>{
//     console.log(`husband : I got some butter`);
//     console.log('husband : we should go in');
//     console.log('wife:I need some cold drinks ');
//     return new Promise((resolve ,reject)=> resolve(`${t} Cold Drinks`))
// });

// getcoldDrinks.then((t)=>console.log(t));

// console.log('person4:shows ticket');
// console.log('person5:shows ticket');


// // // Coding using async await-------------------------------------------
// console.log('person1:shows ticket');
// console.log('person2:shows ticket');

// // // Async function expression, we are calling inside the constant variable
// // const preMovie =async ()=> 'preMovie';
// // preMovie().then((m) => console.log(m));

// const preMovie =async ()=> {
  
//     const promiseWifeBringsTickets = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('tickets'), 3000);
// });
 
// const getPopcorn = new Promise((resolve,reject)=>resolve(`popcorn`));

// const getButter = new Promise((resolve,reject) => resolve(`butter`));

// const getColdDrinks =new Promise((resolve,reject) => resolve(`ColdDrinks`));

// let ticket = await promiseWifeBringsTickets;

// console.log(`wife:I have the ${ticket}` );
// console.log('husband :we should go in');
// console.log('wife:No I am hungry');

// let popcorn = await getPopcorn;

// console.log(`husband : I got some ${popcorn}`);
// console.log('husband : we should go in');
// console.log('wife:I need butter on my popcorn');

// let butter = await getButter;

// console.log(`husband : I got some ${butter}`);
// console.log('husband : we should go in');
// console.log('wife:I need some cold drinks  ');

// let coldDrinks = await getColdDrinks;

// console.log(`husband : I got some ${coldDrinks}`);
// console.log(`husband: anything else darling`);
// console.log(`wife : lets go we are getting late`);
// console.log(`husband: thank you for the reminder *grins*`);

// return ticket;

// }

// preMovie().then((m) => console.log(`person3 : shows ${m}`));

// console.log('person4:shows ticket');
// console.log('person5:shows ticket');

// //--------------using promise all in Async await & Using error handling-------------// //

console.log('person1:shows ticket');
console.log('person2:shows ticket');

// const preMovie =async ()=> {
  
//     const promiseWifeBringsTickets = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('tickets'), 3000);
// });
 
// //-------- using promise all in Async await ------------------////

// const getPopcorn = new Promise((resolve,reject)=>resolve(`popcorn`));
// const getButter = new Promise((resolve,reject) => resolve(`butter`));
// const getColdDrinks =new Promise((resolve,reject) => resolve(`ColdDrinks`));

// let ticket = await promiseWifeBringsTickets;

// let [Popcorn, Butter ,Colddrinks] = await Promise.all([getPopcorn ,getButter , getColdDrinks]);
// console.log(`${Popcorn} ,${Butter} , ${Colddrinks}`)


const preMovie =async ()=> {
  
    const promiseWifeBringsTickets = new Promise((resolve, reject) => {
    setTimeout(() => reject('tickets'), 3000);
});

let ticket
try {
    ticket=await promiseWifeBringsTickets;
} catch (e) {
    ticket = 'sad face';
}

return ticket;

}

preMovie().then((m) => console.log(`person3 : shows ${m}`));

console.log('person4:shows ticket');
console.log('person5:shows ticket');