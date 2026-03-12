

const dummy = [
    {
        id: "101",
        name: "Authentication",
        description: "Build fully functional signup and signin endpoints using JWT authentication.",
        language: "Go",
        totalSubmit: "144"
    },
    {
        id: "102",
        name: "URL Shortener",
        description: "Create an API that converts long URLs into short links and redirects them.",
        language: "Node.js",
        totalSubmit: "212"
    },
    {
        id: "103",
        name: "Todo API",
        description: "Develop a REST API to create, update, delete, and list todos with authentication.",
        language: "Python",
        totalSubmit: "98"
    },
    {
        id: "104",
        name: "Chat Server",
        description: "Build a real-time chat server using WebSockets supporting multiple rooms.",
        language: "Rust",
        totalSubmit: "76"
    },
    {
        id: "105",
        name: "File Upload Service",
        description: "Create an endpoint to upload files and store them in cloud storage.",
        language: "Java",
        totalSubmit: "134"
    },
    {
        id: "106",
        name: "Rate Limiter",
        description: "Implement a middleware that limits API requests per user using token bucket algorithm.",
        language: "Go",
        totalSubmit: "67"
    },
    {
        id: "107",
        name: "Blog Backend",
        description: "Build a backend system for blog posts with CRUD operations and user roles.",
        language: "Node.js",
        totalSubmit: "189"
    },
    {
        id: "108",
        name: "Task Queue Worker",
        description: "Implement a background job worker that processes tasks from a queue.",
        language: "Python",
        totalSubmit: "53"
    }
];


export function Content() {
    return <div className="pt-24 px-4  ">
        
        <div className="bg-white/80 rounded-lg h-screen">
            <table className="w-full ">
                <table className="w-full ">
                    <thead>
                        <tr className=" text-2xl capitalize text-black">
                            <th className="p-3 text-left ">name</th>
                            <th className="p-3 text-left">id</th>
                            <th className="p-3 text-left">description</th>
                            <th className="p-3 text-left">language</th>
                            <th className="p-3 text-left">total submit</th>
                        </tr>
                    </thead>

                    <tbody>
                        
                        {dummy.map((data) => (
                            <tr key={data.id} className="cursor-pointer hover:border text-black">
                                <td className="p-3">{data.id}</td>
                                <td className="p-3">{data.name}</td>
                                <td className="p-3">{data.description}</td>
                                <td className="p-3 ">{data.language}</td>
                                <td className="p-3 text-center">{data.totalSubmit}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </table>
        </div>
    </div>
}