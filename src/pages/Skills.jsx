import SkillCards from "../components/blocks/SkillCards"

export default function Skills() {
    return (
        <section className="container h-screen">
            <div className="py-4">
                <h2 className="font-semibold text-lg">Skills</h2>
                <h3 className="text-gray-600">See which skills people are offering.</h3>
            </div>

            <div className="grid grid-cols-3 gap-4">
                <SkillCards />
                <SkillCards />
                <SkillCards />
                <SkillCards />
                <SkillCards />
                <SkillCards />
            </div>
        </section>
    )
}