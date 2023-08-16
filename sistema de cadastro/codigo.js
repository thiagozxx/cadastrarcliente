/* CRIANDO A FUNÇÃO MENU */

function menu() {
    opcao = parseInt(prompt(
        "----- Menu Principal -----\n\n" +
        "1 - Cadastro de cliente\n" +
        "2 - Cadastro de Colaborador\n" +
        "3 - Cadastro de produto\n" +
        "4 - Cadastro de sistema\n"
    ));


    switch (opcao) {
        case 1:
            cadastrar_cliente();
            break;
        case 2:
            cadastrar_colaborador();
            break;
        case 3:
            cadastrar_produto();
            break;
        case 4:
            cadastrar_sistema();
            break;
        default:
            alert("Finalizando o Sistema de Cadastro");
            document.getElementById("relatorio").alert('Obrigado!')
    }
};

/* funçao cadastrar cliente */
function cadastrar_cliente() {
    let x = "n";
    relatorio = "*- Relatório de Clientes -* <br> "
    while (x.toUpperCase() != "S") {
        id = parseInt(prompt("Digite o ID do cliente"));
        nome = prompt("Digite o nome do cliente");
        endereco = prompt("Digite o endereço do cliente");

        relatorio = relatorio + "<br>+----------------------+<br><br>" +
            "ID:" + id + "<br>" +
            "NOME:" + npme + "<br>" +
            "ENDEREÇO:" + endereco +
            "<br>+----------------------+<br><br>"

        confirme = prompt("Finalizar Cadastro? S - para sim ou N - para não")

        if (confirme.toUpperCase == "S") {
            x = "S";
        };
        document.getElementById("relatorio").innerHTML = "<p>" + relatorio + "</p>";
    }
}