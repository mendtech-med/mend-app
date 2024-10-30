import Title from "../_ui/common/title";
import Projects from "./_ui/projects";


function Home() {
    return (
        <div className="w-full max-h-screen box-border overflow-y-scroll">
            <div className="px-12 pt-4 pb-10">
                <div className="flex w-full space-x-4">
                    <section className="h-full box-border flex-1 pt-8">
                        <Projects />
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Home;
