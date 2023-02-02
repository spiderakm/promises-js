const posts = [
    {title:'post1',body:"this is post one",createdAt:new Date().getTime()},
    {title:'post2',body:"this is post one",createdAt:new Date().getTime()}

];
let interverId = 0;

function getPost(){
    
    clearInterval(interverId)
    interverId = setInterval(() => {
        
        let output = '';
        for(let i=0;i<posts.length;i++){
            output += `<li>${posts[i].title} last updated ${(new Date().getTime() - posts[i].createdAt)/1000} second ago</li>`
        }
        document.body.innerHTML=output

        
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

// delete post
// function deletePost(){
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             if(posts.length > 0){
//                 resolve(posts.pop())
//             }else{
//                 reject("array is empty now")
//             }
            
//         }, 1000);
//     })
// }





createPost({title:'post3',body:"this is post3"})
.then(() => {
    getPost()
    deletePost().then(() => {
        getPost()
        deletePost().then(() => {
            getPost()
            deletePost().then(() => {
                getPost();
                deletePost().then(() => {})
                .catch((err) => {
                    console.log('inside block error',err)
                })
            })
        })
    })
})
.catch(err => console.log(err))

const users = [];



function createNewUser(user){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // {...post,CreatedAt:new Date().getTime()}
        //   console.log(user);
          const usercreatedbefore = users.push(user);
          const username1 = user.username;
          const activitytime =user.lastactivitytime;
        //   console.log(username1)
          console.log(username1 ,"First Activity time :  " ,activitytime );
          const err1 = false;
          if(!err1){
            resolve();
          } 
          else{
            reject('Error: Something went wrong');
          } 
        }, 1000);

    })

}

 function updatelastctivitytime () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // console.log(user.username);
            users.lastactivitytime = new Date().getTime();
            // console.log(users.username)
            const usertime= console.log(" Last activity time : ",users.lastactivitytime);
            resolve(usertime)
        }, 1000);
    })

 } 

function deleteuserPost(){
    return new Promise((resolve, reject) => {
        setTimeout(()  =>{
            if(users.length>0){
                resolve(users.pop());
            }
            else{
                reject('Array is Empty now')
            }
        },1000);
    });
}




const p1=new Promise((resolve, reject) => {
    setTimeout(() => {

        resolve(createNewUser({username :'ash',lastactivitytime:new Date().getTime()})) 
        updatelastctivitytime(); 
    }, 1000);

})

const p2=new Promise((resolve, reject) => {
    setTimeout(() => {

        resolve(createNewUser({username :'XXX123',lastactivitytime:new Date().getTime()})) 
        updatelastctivitytime(); 
    }, 2000);

})

// function userupdatepost(){
    Promise.all([p1,p2,deleteuserPost])
    .then(() =>{
        console.log(users)

    })
    .catch(err => console.log('Error inside the create user',err))