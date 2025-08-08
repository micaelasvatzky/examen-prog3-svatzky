import MoviesGridContainer from "@/app/components/MoviesGridContainer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12">
      <h1 className="mb-8 text-3xl">Movies</h1>
      <MoviesGridContainer />
    </main>
  );
}
