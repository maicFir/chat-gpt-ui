import type { Metadata } from "next";
import { BaseLayout } from "@comp/global"
import "@src/styles/globals.css";


export const metadata: Metadata = {
    title: "Chat GPT UI",
    description: "chat gpt ui",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
            >
                <BaseLayout>
                    {children}
                </BaseLayout>

            </body>
        </html>
    );
}
