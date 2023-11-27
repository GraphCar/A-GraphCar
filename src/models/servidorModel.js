var database = require("../database/config")


function listarDados(periodo, grupo) {
    // console.log("ACESSEI O Servidor MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listarDados():");
    var formato = "";
    if (grupo == "dia") {
        formato = "DATE_FORMAT(dateDado, '%m/%d')";
    } else if (grupo == "mes") {
        formato = "DATE_FORMAT(dateDado, '%Y/%m')";
    } else if (grupo == "hora") {
        formato = "DATE_FORMAT(dateDado, '%m/%d %H:00')";
    } else if (grupo == "minuto") {
        formato = "DATE_FORMAT(dateDado, '%H:%i')";
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

function listarTempoOcorrencias() {
    var instrucao = "SELECT * FROM tempo_chamados_porcent;";
    return database.executar(instrucao);
}

function listarAlertas(fkServidor) {
    var instrucao = 'SELECT * FROM Chamado WHERE encerrado = 0';
    if (fkServidor == "-") {
        instrucao += ";";
    } else {
        instrucao += ` AND fkServidor = ${fkServidor};`;
    }
    return database.executar(instrucao);
}

function listarPeriodosChamados(fkServidor) {
    var instrucao = `SELECT fkServidor, fkComponente, encerrado,
        dataAbertura, 
        CASE WHEN encerrado = 1 
            THEN ultimaMensagemSlack
            ELSE now() END AS dataFechamento
        FROM Chamado`
        if (fkServidor != "-") {
            instrucao += ` WHERE fkServidor = ${fkServidor}`;
        }
        instrucao += " ORDER BY dataAbertura DESC;"

        return database.executar(instrucao)
};

module.exports = {
    listarDados,
    listarTempoOcorrencias,
    listarAlertas,
    listarPeriodosChamados
}