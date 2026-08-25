import os from "node:os";

import { obterRamLivreGiga } from "../utils/hardware.js";
import { configApp } from "../config/environment.js";



export const executarAuditoriaMecanica = (): void => {
    const ramDisponivel = obterRamLivreGiga();

    console.log(`[SERVICE] Iniciando varredura no host: ${os.hostname()}`);
    console.log(`[SERVICE] RAM disponível: ${ramDisponivel.toFixed(2)} GB`);

    if (ramDisponivel < 1.0) {
        console.warn("[ALERTA] Host operando com menos de 1GB de RAM Livre!");
    } else {
        console.log("[STATUS] Recursos de memória operando dentro da normalidade.");
    }
};