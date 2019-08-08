for(var n=0; n<100; n++){

var rand = Math.random()
if (rand <=0.1){
    var size = "big";
}else if (rand <=0.3){
    var size = "medium";
}else{
    var size = "small"
}

var f = new Flake (size,"white");
f.render();
}