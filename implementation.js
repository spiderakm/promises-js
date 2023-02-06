// const posts = [
//     {title:'post1',body:"this is post one"},
//     {title:'post2',body:"this is post one"}

// ];

// function getPost(){
//     setTimeout(() => {
//         let output = ""
//         posts.forEach((post,index) => {
//             output += `<li>${post.title}</li>`

//         })
//         document.body.innerHTML = output
//     }, 1000);
// }


// function createPost(post){
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {

//             posts.push({post,createdAt:new Date().getTime()})
//             const error = false;
//             if(!error){
//                 resolve();

//             }else{
//                 reject("something went wrong");
//             }
//         }, 3000);
//     })

// }





// createPost({title:'post3',body:"this is post3"}).then(getPost)

// // all promises
// // const promise1 = Promise.resolve("hello")
// // const promise2 = 10;
// // const promise3 = new Promise((resolve,reject) => {
// //     setTimeout(resolve,2000,'goodbye')
// // })
// // const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())

// // Promise.all([promise1,promise2,promise3,promise4]).then((values) => console.log(values))

// //async & await
// // async function init(){
// //      await createPost({title:'post3',body:"this is post3"});
// //     getPost()

// // }
// // init()

// //async await & fetch

// async function getData(){
//     const res = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await res.json();
//     console.log(data)
// }
// getData()


////car trip example

//buycar
//planTrip
//reachmanali
//visitmountain

function buycar() {
    return new Promise ((resolve,reject) => {
        setTimeout(() => {
            resolve("buy a mercedes car")
        }, 3000);
    })

}

function planTrip() {
    return new Promise ((resolve,reject) => {
        setTimeout(() => {
            resolve("lets go to gova")
        }, 1000);
    })
 
}

function reachmanali() {
    return new Promise ((resolve,reject) => {
        setTimeout(() => {
            resolve("recahed gova")
        }, 2000);
    })
}

function visitmountain() {
    return new Promise ((resolve,reject) => {
        setTimeout(() => {
            resolve("visited mountain")
        }, 0);
    })
}

// buycar()
// .then((msg1) => {
//     console.log(msg1)
//     planTrip().then((msg2) => {
//         console.log(msg2)
//         reachmanali().then((msg3) => {
//             console.log(msg3)
//             visitmountain().then((msg4) => {
//                 console.log(msg4)
//             })
//         })
//     })
// })
// async & await

async function a() {
    const msg1 = await buycar()
    console.log(msg1)
    const msg2 = await planTrip()
    console.log(msg2)
    const msg3 = await reachmanali();
    console.log(msg3)
    const msg4 = await visitmountain()
    console.log(msg4)
}
a();