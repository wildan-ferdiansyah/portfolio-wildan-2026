export default function Container({children}: {children: React.ReactNode}) {
  return (
    <main className="w-full max-w-7xl mx-auto py-8 lg:py-14 px-6 min-h-screen">
      {/* Ubah menjadi flex-col di mobile, flex-row di desktop (lg) */}
      <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12 mt-12 lg:mt-0">
        {children}
      </div>
    </main>
  );
}