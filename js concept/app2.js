function abc(hello,world){
    var a=10;
    let shubham="hello world"+hello;
    world(shubham);
}
function world(){
    console.log("shubham");
}
console.log(abc('bro',world()));
