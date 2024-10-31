"use client"; // Force client-side rendering

import { ClerkProvider } from "@clerk/nextjs";
import { shadesOfPurple } from "@clerk/themes";

export default function ClientClerkProvider({ children }) {
    return (
        <ClerkProvider
            appearance={{
                baseTheme: shadesOfPurple,
                variables: {
                    colorPrimary: "#3b82f6",
                    colorBackground: "#1a202c",
                    colorInputBackground: "#2D3748",
                    colorInputText: "#F3F4F6"
                },
                elements: {
                    formButtonPrimary:"text-white",
                    card: "bg-gray-800",
                    headerTitle: "text-blue-400",
                    headerSubtitle: "text-gray-400",
                }
            }}
        >
            {children}
        </ClerkProvider>
    );
}
