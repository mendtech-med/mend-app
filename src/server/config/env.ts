const envConfig = {
    port: process.env.PORT,
    nodeEnv: process.env.NODE_ENV as 'development' | 'production',
    clerk: {
        webhookSecret: process.env.WEBHOOK_SECRET,
        publicKey: process.env.CLERK_PUBLISHABLE_KEY,
        secretKey: process.env.CLERK_SECRET_KEY,
        jwtKey: process.env.CLERK_JWT_KEY,
    }
};

export default envConfig;