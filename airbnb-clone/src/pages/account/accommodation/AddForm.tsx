
const AddForm = () => {
    return (
        <form action="">
            <h2 className="text-2xl mt-4">Title</h2>
            <p className="text-gray-500 text-sm">Title for your places should be short and catchy as in advertiment</p>
            <input type="text" placeholder="title: your title" />
            <h2 className="text-2xl mt-4">Address</h2>
            <p className="text-gray-500 text-sm">Address to this place</p>
            <input type="text" placeholder="Enter Your Address" />
            <h2 className="text-2xl mt-4">Photos</h2>
            <p className="text-gray-500 text-sm">More = better</p>
            <div className="flex gap-2">
                <input type="text" placeholder="Add using a link ...jpg" />
                <button className="bg-gray-200 px-4 rounded-2xl">Add Photos</button>
            </div>
            <div className="mt-2 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                <button className="flex justify-center border bg-transparent rounded-2xl p-8 text-2xl text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-8">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                    </svg>
                    Upload
                </button>
            </div>
        </form>
    );
};

export default AddForm;