const projects = [
    {
        id: 1,
        title: "E-Commerce website",
        tech: ["React", "Node.js"],
        status: "Completed"
    },
    {
        id: 2,
        title: "Task Management",
        tech: ["React", "Node.js", "Vue JS"],
        status: "Completed"
    }
];

export default function handler(req, res) {
    const {method, query} = req;

    if (method === 'GET') {
        if (query.id) {
            const project = projects.find(p => p.id === parseInt(query.id))
            return res.status(200).json(project || { error: 'Project not found'})
        }
        return res.status(200).json(projects)
    }

    res.status(405).json({ error: 'Method not allowed' })
}