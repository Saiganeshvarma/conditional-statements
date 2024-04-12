var n = 15
var i = 1
while(i<=n){
    if(i%3 == 0 && i%5 == 0){
        console.log("fizz buzz" + i);
    }else if(i%3 == 0){
        console.log("fizz" + i);
    }else if(i% 5 == 0){
        console.log("buzz" + i);
    }
    i++
}