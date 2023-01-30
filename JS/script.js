function verifica(){
    var num = document.getElementById("numero").value;
  
    if(num == 0){
        alert("insira um número")
        exit;
    }
    

    if (num % 2 == 0) {
        alert("O número lido é par!");
    } else {
       alert("O número lido é impar!");
    }
  
}

