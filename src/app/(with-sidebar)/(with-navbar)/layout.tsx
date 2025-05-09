import Navbar from "@/components/Navbar";

export default function WithNavbarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <div style={{ paddingTop: "4.5rem", height: "100%", width: "100%" }}>
        {children}
      </div>
    </>
  );
}
