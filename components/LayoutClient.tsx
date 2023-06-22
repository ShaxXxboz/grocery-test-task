"use client";

import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "@/components/Header";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const defaultTheme = createTheme();
const queryClient = new QueryClient();

export default function LayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
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
  );
}
