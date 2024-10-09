"use client";
import {
    ClerkProvider,
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton
} from '@clerk/nextjs'
import {
    QueryClientProvider, QueryClient
} from "react-query"


const queryClient = new QueryClient();


const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <ClerkProvider>
                <QueryClientProvider client={queryClient}>
                    {children}
                </QueryClientProvider>
            </ClerkProvider>
        </>
    );
}

export default Providers;