import Header from "@/components/header/page";
import "../globals.css";
import Footer from "@/components/footer/page";
import ScrollToTopButton from "@/components/scrollToTop/ScrollToTopButton";

export default async function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col mx-auto text-brand-dark">
      <Header />
      <div className="p-2 mt-[78px] lg:py-6 lg:px-0">{children}</div>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
