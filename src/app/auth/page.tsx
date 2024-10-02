'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth, useClerk } from '@clerk/nextjs';

const AuthHandler = () => {
    const router = useRouter();
    const { isLoaded, userId, sessionId, getToken } = useAuth();
    const { redirectToSignIn } = useClerk();

    useEffect(() => {
        if (isLoaded) {
            if (userId && sessionId) {
                getToken().then((token: any) => {
                    const extensionId = 'hpniabeflpajpkcoigmknhadbijjaega';
                    const redirectUri = `chrome-extension://${extensionId}/index.html`;
                    const redirectWithToken = `${redirectUri}?token=${token}`;
                    window.location.href = redirectWithToken;
                });
            } else {
                redirectToSignIn();
            }
        }
    }, [isLoaded, userId, sessionId, getToken, router]);

    return <div>Loading...</div>;
};


export default AuthHandler;