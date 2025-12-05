export default function DashboardPage() {
  return (
    <main className="space-y-3">
      <p className="text-sm uppercase tracking-wide text-muted-foreground">
        Dashboard
      </p>
      <h1 className="text-3xl font-semibold">Welcome to the POS dashboard</h1>
      <p className="text-muted-foreground">
        Choose a module to get started: shops, products, sales, expenses, cash,
        due, or reports.
      </p>
    </main>
  );
}
