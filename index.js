function verifica() {
    var num = document.getElementById("numero").value
    var int_num = Number(num);

        if(int_num%2 == 0) {
            alert("o numero é par")
        }
        else {
            alert("o numero é ímpar")
     }
}