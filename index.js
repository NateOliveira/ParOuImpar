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

//Dark Mode

const $html = document.querySelector('html')
const $checkbox = document.querySelector('#switch')

$checkbox.addEventListener('change', function(){
    $html.classList.toggle('dark-mode')
})