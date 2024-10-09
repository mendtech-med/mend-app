
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="w-full overflow-y-hidden min-h-full p-4 box-border h-screen">
            {children}
        </main >
    );
}



