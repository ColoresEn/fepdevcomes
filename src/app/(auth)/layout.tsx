import { Suspense } from "react";

const AuthLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="grid flex-1 place-items-center">
      <Suspense
        fallback={
          <div className="grid min-h-48 place-items-center text-muted-foreground">
            Cargando...
          </div>
        }
      >
        {children}
      </Suspense>
    </div>
  );
};
export default AuthLayout;
