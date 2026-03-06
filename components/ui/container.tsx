export default function Container({children}: {children: React.ReactNode}) {
  return (
    <main className="w-full max-w-7xl mx-auto py-14 px-6  min-h-screen">
      <div className="flex items-start gap-12">
        {children}
      </div>
    </main>
  )
}