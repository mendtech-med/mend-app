
export default function Page() {
    // useEffect(() => {

    //     const fetchTest = async () => {
    //         const response = await fetch('/api/projects/last-updated', {
    //             credentials: 'include',
    //             method: 'GET',
    //         });
    //         if (!response.ok) {
    //             console.log('Error');
    //             return;
    //         }
    //         const data = await response.json();
    //         console.log(data);
    //     }

    //     fetchTest();

    //     return () => {
    //         console.log('Test Page Unmounted');
    //     }
    // }, []);


    return (
        <h1>Test Page</h1>
    );
}