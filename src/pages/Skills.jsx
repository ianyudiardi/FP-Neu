import SkillCards from "../components/blocks/SkillCards"

export default function Skills() {
    const skills = [
        {
            id: 1,
            title: "Andre",
            qual: "Frontend - 5y+",
            description: "Looking for backend",
        },

        {
            id: 2,
            title: "Barry",
            qual: "Backend - 5y+",
            description: "Looking for frontend"
        },

        {
            id: 3,
            title: "Candice",
            qual: "Musician - 7y+",
            description: "I can teach you how to play guitar/piano in exchange for roofing services"
        },

        {
            id: 4,
            title: "Derek",
            qual: "[PLACEHOLDER]",
            description: "[PLACEHOLDER]"
        },

        {
            id: 5,
            title: "Eugene",
            qual: "[PLACEHOLDER]",
            description: "[PLACEHOLDER]"
        },

        {
            id: 6,
            title: "Vasily",
            qual: "[PLACEHOLDER]",
            description: "[PLACEHOLDER]"
        },

    ]

    return (
        <section className="container h-screen">
            <div className="py-4">
                <h2 className="font-semibold text-lg">Skills</h2>
                <h3 className="text-gray-600">See which skills people are offering.</h3>
            </div>

            <div className="grid grid-cols-3 gap-4">
                {
                    skills.map((skill) => (
                        <SkillCards key={skill.id} title={skill.title} qual={skill.qual} description={skill.description} />
                    ))
                }
            </div>
        </section>
    )
}