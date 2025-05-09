export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-6">
      <h2>Top</h2>
      <div style={{ width: 100, height: 2000, background: "lightgray" }} />
      {children}
    </div>
  );
}
