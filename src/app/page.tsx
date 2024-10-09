import Title from "./_ui/common/title";
import Projects from "./_ui/projects";
import Header from "./_ui/global/header";


function Home() {
  return (
    <div className="w-full min-h-screen box-border">
      <div className="px-12 pt-4">
        <Header />
        <div className="flex w-full space-x-4">
          <section className="h-full box-border flex-1">
            <Title>My Projects</Title>
            <Projects />
          </section>
        </div>
      </div>
    </div>
  )
}


export default Home;
