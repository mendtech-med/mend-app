import {
    ClerkProvider,
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton
} from '@clerk/nextjs'

const Providers = ({ children }: { children: React.ReactNode }) => {
    return (

        <>
            <ClerkProvider>
                {children}
            </ClerkProvider>
        </>
    );
}

export default Providers;