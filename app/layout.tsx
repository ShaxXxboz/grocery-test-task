import LayoutClient from "@/components/LayoutClient";

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
        <LayoutClient children={children} />
      </body>
    </html>
  );
}
