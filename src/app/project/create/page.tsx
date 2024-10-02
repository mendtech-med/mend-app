import Form from "./_ui/form";
import CreateAgentFormActions from "./_ui/form/actions";
import Preview from "./_ui/preview";


const CreateAgentPage = () => {
    return (
        <div className="flex space-x-10  h-screen">
            <section className="h-full relative flex-1 ">
                <Form />
            </section>
            <section className="h-full box-border flex-1 py-6">
                <Preview />
            </section>
        </div>
    );
}

export default CreateAgentPage;