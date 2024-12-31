import Container from "@/components/container";
import Footer from "@/components/footer";
import Header from "@/components/header";
import ProjectsList from "@/components/projects-list";

export default function Home() {
  return (
    <Container>
      <Header />
      <main>
        <div className="mb-8 flex flex-col gap-4">
          <p>
            I'm an IT technician and web developer dedicated to crafting
            effective digital solutions.
          </p>
          <p>
            I prioritize simplicity and functionality, constantly seeking to
            expand my knowledge and tackle challenges, be it through programming
            or technical problem-solving.
          </p>
        </div>
        <h2 className="mb-4 text-lg font-semibold">Projects</h2>
        <ProjectsList />
      </main>
      <Footer />
    </Container>
  );
}
