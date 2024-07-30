import About from "@/components/About";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";

export default function HomeEs() {
  return (
    <main className='h-screen w-screen bg-neutral-950'>
      <div style={{ zIndex: 2, position: "relative" }}>
        <NavBar LanguageType='es' />
      </div>
      <div style={{ zIndex: 1, position: "relative" }}>
        <Hero />
      </div>
      <About LanguageType='es' />
    </main>
  );
}
