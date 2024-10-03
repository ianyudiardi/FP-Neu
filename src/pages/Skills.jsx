import { useState, useEffect } from "react"
import SkillCards from "../components/blocks/SkillCards"
import data_skills from "../data/skills.json"

export default function Skills() {
    // const skills = [
    //     {
    //         id: 1,
    //         name: "Andre",
    //         title: "Frontend - 5y+",
    //         description: "Looking for backend",
    //     },

    //     {
    //         id: 2,
    //         name: "Barry",
    //         title: "Backend - 5y+",
    //         description: "Looking for frontend"
    //     },

    //     {
    //         id: 3,
    //         name: "Candice",
    //         title: "Musician - 7y+",
    //         description: "I can teach you how to play guitar/piano in exchange for roofing services"
    //     },

    //     {
    //         id: 4,
    //         name: "Derek",
    //         title: "[PLACEHOLDER]",
    //         description: "[PLACEHOLDER]"
    //     },

    //     {
    //         id: 5,
    //         name: "Eugene",
    //         title: "[PLACEHOLDER]",
    //         description: "[PLACEHOLDER]"
    //     },

    //     {
    //         id: 6,
    //         name: "Vasily",
    //         title: "[PLACEHOLDER]",
    //         description: "[PLACEHOLDER]"
    //     },
    // ]

    const [skills, setSkills] = useState(data_skills.data)
    function getUsers() {
        fetch('https://dummyjson.com/users')
            .then(res => res.json())
            .then((result) => {
                setSkills(result.users)
            });
    }
    useEffect(() => { getUsers(); }, [])

    return (
        <section className="container h-screen">
            <div className="py-4">
                <h2 className="font-semibold text-lg">Skills</h2>
                <h3 className="text-gray-600">See which skills people are offering.</h3>
            </div>

            <div className="grid grid-cols-3 gap-4">
                {
                    skills &&
                    skills.map((skill) => (
                        <SkillCards key={skill.id} name={skill.firstName} />
                    ))
                }
            </div>
        </section>
    )
}