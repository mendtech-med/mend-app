const envConfig = {
  apiUrl: process.env.NEXT_PUBLIC_API_URL as string,
  clerk: {
    publishableKey: process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY as string,
    secretKey: process.env.CLERK_SECRET_KEY as string,
  },
};

export default envConfig;
