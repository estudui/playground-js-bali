export default function handler(req, res) {
    const bio = {
        name: "JohnDoe",
        role: "Fullstack Developer",
        experience: "3 years",
        skills: ["Javascript", "React", "node.js", "CSS"],
        location: "Jakarta, Indonesia"
    }

    res.status(200).json(bio)
}