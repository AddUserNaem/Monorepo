export default function Home() {
  return (
    <main style={{ padding: 24 }}>
      <h1>ENV: {process.env.NEXT_PUBLIC_APP_ENV ?? "dev"}</h1>
    </main>
  );
}
