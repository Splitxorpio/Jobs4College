function calculator(){
    const loan_input = document.getElementById("loan").value;
    const interest_input = document.getElementById("interest").value;
    const term_input = document.getElementById("term").value;
    const pay_input = document.getElementById("payment").value;
    debt = loan_input;
    plus= loan_input
    var total = 0;
    for (var i = 1; i <= term_input; i++) {
        var percent = loan_input * (interest_input/100);
        total = total += percent;
    }
    console.log(total)
    document.getElementById("result").innerHTML = total;
}