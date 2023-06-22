import LayoutClient from "@/components/LayoutClient";

export const metadata = {
  title: "Grocery App",
  description: "Buy groceries online",
};

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <LayoutClient children={children} />
      </body>
    </html>
  );
};

export default RootLayout;
