
import { Layout, Menu } from "antd";
import "./globals.css";
import { Header } from "antd/es/layout/layout";
import Link from "next/link";

const items = [
    { key: "home", label: <Link href={"/"}>Home</Link> },
    { key: "notes", label: <Link href={"/notes"}>Notes</Link> }
]

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
          <body>
              <Layout style={{ minHeight: "100vh" }}>
                  <Header>
                      <Menu theme="dark"
                          mode="horizontal"
                          items={items}
                          style={{ flex: 1, minWidth: 0 }} />

                  </Header> {children}</Layout>
              </body>
    </html>
  );
}
