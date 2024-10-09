
const ContentView = ({ content }: { content: string }) => {

    return (
        <section
            className="w-full bg-white p-4 h-full overflow-y-scroll p-0 m-0"
            dangerouslySetInnerHTML={{ __html: content }}
        ></section>
    )

}

export default ContentView;