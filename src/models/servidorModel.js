var database = require("../database/config")

function listarServidores() {
    instrucao = "SELECT idServidor, hostname, mac FROM Servidor;"
    return database.executar(instrucao);
}

function listarDados(fkServidor, periodo, grupo) {
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

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        formato = formato.replace("DATE_", "");

        formato = formato.replace("%m", "MM");
        formato = formato.replace("%H", "HH");
        formato = formato.replace("%i", "mm");
        formato = formato.replace("%d", "dd");
        formato = formato.replace("%Y", "yyyy");
    }

    var instrucao = `SELECT fkServidor, ${formato} AS dataFormatada,
            MIN(dateDado) AS minDateDado,
            MAX(dateDado) AS maxDateDado,
            ROUND(AVG(cpuUso), 2) AS cpuUso,
            ROUND(AVG(cpuTemperatura), 2) AS cpuTemperatura,
            ROUND(AVG(memoria), 2) AS memoria,
            ROUND(AVG(disco), 2) AS disco
            FROM DadosServidor 
            WHERE fkServidor = ${fkServidor} AND
            dateDado > ${process.env.AMBIENTE_PROCESSO == "producao" ? "DATEADD(" + periodo + ", -1, GETDATE())" : "DATE_SUB(now(), INTERVAL 1 " + periodo + ")"} 
            GROUP BY fkServidor, ${process.env.AMBIENTE_PROCESSO == "producao" ? formato + " ORDER BY MIN(dateDado)" : "dataFormatada ORDER BY minDateDado"} ASC;`;

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
            ELSE ${process.env.AMBIENTE_PROCESSO == "producao" ? "GETDATE()" : "NOW()"} END AS dataFechamento
        FROM Chamado`   
        if (fkServidor != "-") {
            instrucao += ` WHERE fkServidor = ${fkServidor}`;
        }
        instrucao += " ORDER BY dataAbertura ASC;"

        return database.executar(instrucao)
};

module.exports = {
    listarServidores,
    listarDados,
    listarTempoOcorrencias,
    listarAlertas,
    listarPeriodosChamados
}