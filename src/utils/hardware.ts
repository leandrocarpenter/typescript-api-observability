import os from "node:os";

export const obterRamLivreGiga = (): number => {
    return os.freemem() / 1024 / 1024 / 1024;

};