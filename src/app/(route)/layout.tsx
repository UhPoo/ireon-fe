import { PropsWithChildren } from "react";
import Header from "../_components/Header";
import Footer from "../_components/Footer";

type MainLayoutProps = PropsWithChildren;

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen mx-auto max-w-screen">
      <Header />
      <div className="flex-grow">
        <main className="h-screen">{children}</main>
      </div>
      <Footer />
    </div>
  );
}
