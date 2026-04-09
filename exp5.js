function findFactorial() {
    let num = document.getElementById("number").value;
    let fact = 1;

    if (num === "" || num < 0) {
        document.getElementById("output").innerHTML = "Enter valid number!";
        return;
    }

    for (let i = 1; i <= num; i++) {
        fact = fact * i;
    }

    document.getElementById("output").innerHTML = "Factorial = " + fact;
}