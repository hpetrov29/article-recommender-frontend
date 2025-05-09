import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Logo from "@/components/Logo";

export default function WithNavbarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Logo />
      <div style={{ paddingTop: "4.5rem", height: "100%", width: "100%" }}>
        {children}
      </div>
    </>
  );
}
