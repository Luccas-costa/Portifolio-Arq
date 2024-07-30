import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <main className='h-screen w-screen bg-neutral-950'>
      <div style={{ zIndex: 2, position: "relative" }}>
        <NavBar LanguageType='pt' />
      </div>
    </main>
  );
}
