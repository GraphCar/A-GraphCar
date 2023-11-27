var database = require("../database/config")


function listarDados(periodo) {
    // console.log("ACESSEI O Servidor MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listarDados():");
    var formato = "";
    if (periodo == "MONTH") {
        formato = "DATE_FORMAT(dateDado, '%m/%d')";
    } else if (periodo == "WEEK") {
        formato = "DATE_FORMAT(dateDado, '%m/%d')";
    } else if (periodo == "YEAR") {
        formato = "DATE_FORMAT(dateDado, '%Y/%m')";
    } else if (periodo == "DAY") {
        formato = "DATE_FORMAT(dateDado, '%m/%d %h:00')";
    }


    var instrucao = `SELECT fkServidor, ${formato} AS dataFormatada,
            MIN(dateDado) AS minDateDado,
            ROUND(AVG(cpuUso), 2) AS cpuUso,
            ROUND(AVG(cpuTemperatura), 2) AS cpuTemperatura,
            ROUND(AVG(memoria), 2) AS memoria,
            ROUND(AVG(disco), 2) AS disco
            FROM DadosServidor 
            WHERE dateDado > DATE_SUB(now(), INTERVAL 1 ${periodo}) GROUP BY fkServidor, dataFormatada ORDER BY minDateDado DESC;`;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    listarDados
}