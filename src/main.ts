import { executarAuditoriaMecanica } from "./services/audit.js"
import { verificarStatusApiExterna, consultarIpPublico } from "./services/api.js"


const main = async (): Promise<void> => {
    console.log("=== [MAIN] STARTING SRE AUTOMATION APPLICATION ===");
   executarAuditoriaMecanica()
   
   console.log("\n--- Disparando Verificação de Serviços Externos ---");

    await verificarStatusApiExterna();
    
    console.log("\n---[MAIN] APPLICATION PROCESS FINISHED ===");

    await consultarIpPublico();

    console.log("\n=== [MAIN] APPLICATION PROCESS FINISHED ===");

};

 main();