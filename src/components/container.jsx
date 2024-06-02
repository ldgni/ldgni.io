export default function Container({ children }) {
  return (
    <div className="container max-w-lg py-4 sm:py-8 md:py-12 lg:py-16 xl:py-20">
      {children}
    </div>
  );
}
