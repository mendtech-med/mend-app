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
            <ClerkProvider appearance={
                {
                    variables: {
                        colorPrimary: "#6869ac",
                        colorBackground: "#6869AC"
                    },
                    signIn: {
                        variables: {
                            colorPrimary: "#6869ac",
                            colorBackground: "#6869AC"
                        }
                    },
                    signUp: {
                        variables: {
                            colorPrimary: "#6869ac",
                            colorBackground: "#6869AC"
                        }
                    },
                }
            }>
                <QueryClientProvider client={queryClient}>
                    {children}
                </QueryClientProvider>
            </ClerkProvider>
        </>
    );
}

export default Providers;