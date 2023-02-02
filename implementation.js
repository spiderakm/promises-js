const posts = [
    {title:'post1',body:"this is post one"},
    {title:'post2',body:"this is post one"}

];

function getPost(){
    setTimeout(() => {
        let output = ""
        posts.forEach((post,index) => {
            output += `<li>${post.title}</li>`

        })
        document.body.innerHTML = output
    }, 1000);
}


function createPost(post){
    return new Promise((resolve,reject) => {
        setTimeout(() => {

            posts.push({post,createdAt:new Date().getTime()})
            const error = false;
            if(!error){
                resolve();

            }else{
                reject("something went wrong");
            }
        }, 3000);
    })

}





createPost({title:'post3',body:"this is post3"}).then(getPost)

// all promises
// const promise1 = Promise.resolve("hello")
// const promise2 = 10;
// const promise3 = new Promise((resolve,reject) => {
//     setTimeout(resolve,2000,'goodbye')
// })
// const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())

// Promise.all([promise1,promise2,promise3,promise4]).then((values) => console.log(values))

//async & await
// async function init(){
//      await createPost({title:'post3',body:"this is post3"});
//     getPost()

// }
// init()

//async await & fetch

async function getData(){
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json();
    console.log(data)
}
getData()