import { configApp } from "../config/environment.js";

interface GitHubStatusResponse {
    page: {
        name: string;
        url: string;
    };
    status: {
        description: string;
        indicator: string;
    };
}

interface IpifyResponse {
    ip: string;
}

export const verificarStatusApiExterna = async (): Promise<void> => {
    const urlEndpoint = "https://www.githubstatus.com/api/v2/status.json";
    console.log(`[HTTP] Conectando ao endpoint no ambiente: ${configApp.ambiente}`);

    try {
        const resposta = await fetch(urlEndpoint, {
            method: "GET",
            signal: AbortSignal.timeout(5000)
        });

        if (!resposta.ok) {
            throw new Error(`A API respondeu com falha HTTP status: ${resposta.status}`);   
        }

        const dados = (await resposta.json()) as GitHubStatusResponse;

        console.log(`[HTTP SUCCESS] Status retornado: ${resposta.status}`);
        console.log(`[SERVICE] Plataforma: ${dados.page.name}`);
        console.log(`[SERVICE] Condição do Sistema: ${dados.status.description} (Indicador: ${dados.status.indicator})`);

    } catch (error) {
        if (error instanceof Error) {
            console.error(`[HTTP ERROR] Falha na integração com a API: ${error.message}`);
        } else {
            console.error("[HTTP ERROR] Erro desconhecido durante a requisição.");
        }
    }
};

export const consultarIpPublico = async (): Promise<void> => {
    const urlEndpoint = "https://api.ipify.org?format=json";

    try {
        const resposta = await fetch(urlEndpoint, {
            method: "GET",
            signal: AbortSignal.timeout(5000)
        });

        if (!resposta.ok) {
            throw new Error(`Falha ao obter IP público, status: ${resposta.status}`);
        }

        const dados = (await resposta.json()) as IpifyResponse;
        console.log(`[TELEMETRIA] IP Público de Saída: ${dados.ip}`);

    } catch (error) {
        if (error instanceof Error) {
            console.error(`[TELEMETRIA ERROR] Falha ao consultar IP: ${error.message}`);
        } else {
            console.error("[TELEMETRIA ERROR] Erro inesperado.");
        }
    }
};