import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Logo from "@/components/Logo";

export default function WithSidebarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Sidebar />
      <Logo />
      <div style={{ paddingLeft: "4.5rem", height: "100%", width: "100%" }}>
        {children}
      </div>
    </>
  );
}
