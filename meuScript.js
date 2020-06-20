let rs = require("readline-sync");
console.log("Comparador de números");

let n1 = rs.questionInt("Digite o primeiro número: ");
let n2 = rs.questionInt("Digite o segundo número: ");

if (n1 > n2) {
    console.log("O maior número é o: " + n1);
} else if (n1 < n2) {
    console.log("O maior número é o: " + n2);
} else {
    console.log("Os números são iguais");
}