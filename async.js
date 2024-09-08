//-Promise

const p = new Promise(function(resolve){
    console.log("hii there 1");
setTimeout(resolve , 10000)
})

p.then(function () {
    console.log("hii there 2");
    
})

//asyncfunc()
//some sync task
//want my work which async return
//some other sync task


function someSyncTask1(){
    console.log();
    
}










































