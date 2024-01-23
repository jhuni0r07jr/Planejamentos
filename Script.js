function Enviar() {
    var OQUE = document.getElementById("Oque").value;
    var ONDE = document.getElementById("Onde").value;
    var Horas = document.getElementById("horas").value;
    var Data = document.getElementById("Data").value;

    var Informacao = {
        "OQUE": OQUE,
        "ONDE": ONDE,
        "Horas": Horas,
        "Data": Data
    };

    var Dados = JSON.parse(localStorage.getItem("jsonData")) || [];

    Dados.push(Informacao);

    localStorage.setItem("jsonData", JSON.stringify(Dados));

    MostrarDados(Dados);
}

function MostrarDados(Dados) {
    var tbody = document.getElementById("tbodyDados");

    tbody.innerHTML = "";

    Dados.forEach(function (Dado, index) {
        var ROW = document.createElement("tr");
        var LinhaOQUE = document.createElement("td");
        var LinhaONDE = document.createElement("td");
        var LinhaHoras = document.createElement("td");
        var LinhaData = document.createElement("td");
        var Excluir = document.createElement("button");

        LinhaOQUE.innerText = Dado.OQUE;
        LinhaONDE.innerText = Dado.ONDE;
        LinhaHoras.innerText = Dado.Horas;
        LinhaData.innerText = Dado.Data;
        Excluir.innerHTML = '<img src="Imagens/Lixeira.png"></img>';

        Excluir.addEventListener("click", function () {
            ExcluirItem(index);
        });


        ROW.appendChild(LinhaOQUE);
        ROW.appendChild(LinhaONDE);
        ROW.appendChild(LinhaHoras);
        ROW.appendChild(LinhaData);
        ROW.appendChild(Excluir);

        tbody.appendChild(ROW);
    });
}

function ExcluirItem(index) {
    var Dados = JSON.parse(localStorage.getItem("jsonData")) || [];
    Dados.splice(index, 1); // Remove o item do array com base no índice
    localStorage.setItem("jsonData", JSON.stringify(Dados));
    MostrarDados(Dados); // Atualiza a exibição após a exclusão
}

document.addEventListener("DOMContentLoaded", function () {
    var Dados = JSON.parse(localStorage.getItem("jsonData")) || [];
    MostrarDados(Dados);
});