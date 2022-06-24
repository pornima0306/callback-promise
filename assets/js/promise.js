let cl = console.log;

/* promise >> it is a javascript object, it gives some value in a future. 
           >> It is used to handle asyncronous operation in javascript
                     
* Promise has 4 states
1. Pending
2. fullfilled
3. rejected
4. settled

* Benifits of promise
1. Improves code readability
2. Better handling asyncronous operation
3. Better Error handling
4. Better flow of control defination */

//for creating constructor function we use new keyword      eg.let d =new Date(2022,5)

let promise1 = new Promise((resolve,reject)=>{
    let error = true;
    if(!error){
        resolve ('Data is loaded !!!');  //if there is no error this resolve will get called
    }else{
        reject ('Something Went Wrong');  //if there is error reject method will get called
    }
});

// promise consume

promise1
    .then((response)=>{     //if promise resolve then() is called
        cl(response)
    })
    .catch((err)=>{       //if promise rejected catch() is called
        cl(err)
    })


/* ------------------------------------------------------------------- */
let blogs =[
    {
    title : 'Blog One',
    info : 'This is Blog one on javascript'
    },
    {
    title : 'Blog Second',
    info : 'This is Blog Second on javascript'
    },
    {
    title : 'Blog Third',
    info : 'This is Blog Third on javascript'
    },
]



const info=document.getElementById("info")
function fetchBlogs(arr){
    setTimeout(()=>{
        let result=`<ul class="list-group">`;
        arr.forEach(blog=>{
            result+=`
                    <li class="list-group-item">
                        <h4>${blog.title}</h4>
                        <p>${blog.info}</p>
                    </li>`
        })
        result+=`</ul>`
        info.innerHTML = result;

    },1000)
}

//blog >> title:"",info:""
function creatBlogs(blog,){
    let promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            blogs.push(blog);
            let error =false;
            if(!error){
                resolve(blogs);
            }else{
                reject('something went wrong');
            }
        },2000);
    });
   return promise;
}

creatBlogs({title : 'Blog Four',info : 'This is Blog Forth on javascript'})
                                                                    .then(response=>{
                                                                        fetchBlogs(response);
                                                                    })
                                                                    .catch(err=>{
                                                                        reject();
                                                                    })
/* ------------------------------------------------------------------- */
const posts = [
    {
        title : "Angular",
        id : 1,
        autherId : 1
    },
    {
        title : "Node.js",
        id : 2,
        autherId : 2
    },
    {
        title : "Javascript",
        id : 3,
        autherId : 3
    },
    {
        title : "MongoDB",
        id : 4,
        autherId : 4
    },
    {
        title : "Vue",
        id : 5,
        autherId : 5
    },
    {
        title : "React",
        id : 6,
        autherId : 6
    },
]

const authors =[
    {name : 'Pornima', id:1},
    {name : 'Pooja', id:2},
    {name : 'Komal', id:3},
    {name : 'Revati', id:4},
    {name : 'Sharda', id:5},
    {name : 'Sandhya', id:6},
];


function getPost(postId){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let post = posts.filter(p =>{
                return p.id ==postId
            })
            if(post.length > 0){
                resolve(post)
            }else{
                reject(Error('There is no such post Exist'))
            }
           /*  let post = posts.find(p =>{
                return p.id ==postId
            })
            if(post){
                resolve(post)
            }else{
                reject(Error('There is no such post Exist'))
            } */
            
        },1000)
    })
    // return promise;
}
function getAuther(post){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let auther = authors.filter(auth=>{
                return post.autherId === auth.id
            })
            if(auther.length >0){
                resolve(auther)
            }else{
                reject(Error("No such author exist"));
            }

        },2000)
    })
}
/* getPost(8)
        .then((res)=>{
            cl(res);
        })
        .catch((err)=>{
            cl(err);
        }) */

/*  getPost(8)
        .then(cl)
        .catch(cl)      
 */


/* getAuther(posts[5])
        .then((res)=>{
            cl(res);
        })
        .catch((err)=>{
            cl(err);
        }) */
/* getAuther(posts[5])
            .then(cl)
            .catch(cl) */


getPost(3)
   .then(res=>{
    cl(res)
    return getAuther(res);
})
.then(res=>{cl(res)})
.catch(cl);

