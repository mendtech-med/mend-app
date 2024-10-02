

const env = {
    port: process.env.PORT,
    nodeEnv: process.env.NODE_ENV as 'development' | 'production',
    clerk: {
        publicKey: process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
        chromeExtensionId: process.env.NEXT_PUBLIC_CHROME_EXTENSION_ID,
    }
};