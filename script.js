//VARIAVEIS

let btnCalculate = document.getElementById("btn2");
let btnClear = document.getElementById("btn");

//Variaveis do resultado
let result2 = document.querySelector(".result2");

//vareavel tela de load
let load = document.querySelector(".load");
let cont = 0;

//variaveis caso campo erro
let campoAmount = document.querySelector(".montagage"),
    campoTerm = document.querySelectorAll(".input_term")[0],
    campoRate = document.querySelectorAll(".input_term")[1],
    campoRepayment = document.querySelectorAll(".radio")[0],
    campoInterest = document.querySelectorAll(".radio")[1];

//Funções
btnCalculate.addEventListener("click", () => {
    cont += 1;

    //Variaveis

    let qtd_hiportecas = document.getElementById("input01").value,
        qtd_anos = document.getElementById("years").value,
        taxa = document.getElementById("taxa").value,
        check_type = document.querySelector('input[name="escolha"]:checked');
        

    //CODIGO

    if (qtd_hiportecas === "" || qtd_anos === "" || taxa === "" || check_type === null || isNaN(qtd_hiportecas) || isNaN(qtd_anos) || isNaN(taxa)) {
        campoAmount.className = "ErrorAmount";
        campoTerm.className = "ErrorTermRate";
        campoRate.className = "ErrorTermRate";
        campoRepayment.className = "ErrorRadio";
        campoInterest.className = "ErrorRadio";
        document.getElementById("error").innerHTML = "Please, fill in all the fields and use <b>only numbers!</b>"



    } else {

        if (campoAmount.className === "ErrorAmount") {
            campoAmount.className = "montagage";
            campoTerm.className = "input_term";
            campoRate.className = "input_term";
            campoRepayment.className = "radio";
            campoInterest.className = "radio";
            document.getElementById("error").innerHTML = "";
        }


        parseFloat(qtd_hiportecas, qtd_anos, taxa);


        if (check_type.id === "Repayment") {
            let r = taxa / 12 / 100; // Taxa mensal
            let n = qtd_anos * 12; // Número total de meses
            let  result = qtd_hiportecas * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
            let total = n*result;
            console.log( result);  // Exibe o valor do pagamento mensal
            
            document.getElementById("mortgage_money").innerText = "£" + parseFloat(result.toFixed(2)).toLocaleString('en-US', { 
                minimumFractionDigits: 2, 
                maximumFractionDigits: 2 });

;
            document.getElementById("text_mortgage").innerText = "your monththly repayments";
            document.getElementById("total").innerText ="£" + parseFloat(total.toFixed(2)).toLocaleString('en-US', { 
                minimumFractionDigits: 2, 
                maximumFractionDigits: 2 });


        } else if (check_type.id === "Interest") {
            let result = qtd_hiportecas * (taxa / 12 / 100);
            let total =(qtd_anos * 12) * result;
            document.getElementById("mortgage_money").innerText = "£" + parseFloat(result.toFixed(2)).toLocaleString('en-US', { 
                minimumFractionDigits: 2, 
                maximumFractionDigits: 2 });

            document.getElementById("text_mortgage").innerText = "your monththly Interes Only";
            document.getElementById("total").innerText ="£" + parseFloat(total.toFixed(2)).toLocaleString('en-US', { 
                minimumFractionDigits: 2, 
                maximumFractionDigits: 2 });

        }


        load.style.display = "flex";

        setTimeout(() => {
            result2.style.display = "flex";

        }, 15000);

        if (cont > 1) {
            result2.style.display = "none";
            cont = 1;
        }


    }
})


btnClear.addEventListener("click", () => {
    document.getElementById("input01").value = "";
    document.getElementById("years").value = "";
    document.getElementById("taxa").value = "";
    let check_type = document.querySelector('input[name="escolha"]:checked')
    check_type.checked = false
})

//CODIGO
