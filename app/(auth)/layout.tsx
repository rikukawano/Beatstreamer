import { Logo } from "./_components/logo";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full flex flex-col items-center justify-center space-y-8">
      <Logo />
      {children}
    </div>
  );  
}
