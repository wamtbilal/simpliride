export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 border-r border-gray-200">
        <div className="p-6">
          <h2 className="text-xl font-bold">Dashboard</h2>
        </div>
      </aside>
      <main className="flex-1">{children}</main>
    </div>
  );
}
