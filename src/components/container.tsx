export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="container max-w-screen-sm p-4 sm:py-8 md:py-12 lg:py-16 xl:py-20">
      {children}
    </div>
  );
}
