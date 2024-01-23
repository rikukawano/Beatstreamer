import Navbar from "../_components/navbar";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <div className="h-full flex flex-col items-center justify-center space-y-8">
        {children}
      </div>
    </>
  );
}
