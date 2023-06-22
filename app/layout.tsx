"use client";

import "./globals.css";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "@/components/Header";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const defaultTheme = createTheme();
const queryClient = new QueryClient();

export const metadata = {
  title: "Grocery App",
  description: "Buy groceries online",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={defaultTheme}>
            <CssBaseline />
            <Header />
            <Container
              sx={{
                padding: "2rem",
              }}
            >
              {children}
            </Container>
          </ThemeProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
