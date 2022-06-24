let cl=console.log;


/* js is single treaded >> At a time single execution
   js is syncronous language 
   js is asynchronous >> Asynchronous means that things can happen independently of the main program flow.
                      >> to handle this asynchronous js invent callback function
   call back function >> call back function execute when something happen
                      >>  A callback is a function passed as an argument to another function
                      >>  This technique allows a function to call another function
                      >>  A callback function can run after another function has finished
    nested call back function >> called as callback pyramid*/

function fetchData(){
    setTimeout (()=>{
        cl('Data is ready now!!!')
    },3000)
}

function templating(){
    setTimeout(()=>{
        cl('UI is ready now!!!')  
    },1000)
}
fetchData();
templating();

//Asynchronous Example

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
function fetchBlogs(){
    setTimeout(()=>{
        let result=`<ul class="list-group">`;
        blogs.forEach(blog=>{
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
    setTimeout(()=>{
        blogs.push(blog)
    },2000)
}

creatBlogs({title : 'Blog Four',info : 'This is Blog Forth on javascript'})
fetchBlogs();

/* ------------------------------------------------------------------ */
setInterval(myFunction, 1000);

function myFunction() {
  let d = new Date();
  document.getElementById("demo").innerHTML=
  d.getHours() + ":" +
  d.getMinutes() + ":" +
  d.getSeconds();
}

/* In the example above, myFunction is used as a callback.
myFunction is passed to setInterval() as an argument.
1000 is the number of milliseconds between intervals, so myFunction() will be called every second. */

/* ------------------------------------------------------------------ */
