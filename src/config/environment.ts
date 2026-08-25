export const configApp = {
    ambiente: process.env.NODE_ENV || "desenvolvimento-local",
    apiToken: process.env.SECRET_API_TOKEN || "token-local-temporario-123",
    limiteMemoriaAlerta: 2.0
};