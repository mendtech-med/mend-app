namespace NodeJS { 
    interface ProcessEnv {
        // env
        NODE_ENV: 'development' | 'production';
        // db
        DATABASE_URL: string;
        // port
        PORT: number;
        // clerk
        NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: string;
        CLERK_SECRET_KEY: string;
        WEBHOOK_SECRET: string;
        // chrome
        NEXT_PUBLIC_CHROME_EXTENSION_ID: string;
        // azure
        AZURE_OPENAI_API_KEY: string;
        AZURE_OPENAI_RESOURCE: string;
        AZURE_OPENAI_DEPLOYMENT_ID: string;
        AZURE_OPENAI_API_VERSION: string;
    }
}

