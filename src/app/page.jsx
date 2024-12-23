import ProjectsList from "@/components/projects-list";

export default function Home() {
  return (
    <main>
      <div className="mb-8 flex flex-col gap-4">
        <p>
          I&apos;m an IT technician and web developer dedicated to crafting
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
  );
}
