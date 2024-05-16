function table(){
    let num = document.getElementById('num').value;
    let result = "";
    for(var i=1; i<=10; i++){
        // var a+=10
        result += num +"  *  " + i + "  =  " + num*i + "<br>"; 
        document.getElementById('result1').innerHTML= result;
        
    }

}
