import { useState, useEffect } from "react";
import SkillCards from "../components/blocks/SkillCards";
import data_skills from "../data/skills.json";
import { useSearchParams } from "react-router-dom";

export default function Skills() {
    const [searchParams, setSearchParams] = useSearchParams();
    const currentPage = parseInt(searchParams.get('page')) || 1;
    const [skills, setSkills] = useState([]);
    const [totalPages, setTotalPages] = useState(1);
    const skillsPerPage = 6;

    function getSkills(page = 1) {
        fetch(`https://dummyjson.com/users?limit=${skillsPerPage}&skip=${(page - 1) * skillsPerPage}`)
            .then(res => res.json())
            .then((result) => {
                setSkills(result.users);
                setTotalPages(Math.ceil(result.total / skillsPerPage));
            });
    }

    useEffect(() => {
        getSkills(currentPage);
    }, [currentPage]);

    const goToPage = (page) => {
        setSearchParams({ page });
    };

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

            {/* Pagination Controls */}
            <div className="flex justify-center mt-4 pb-20">
                <button
                    onClick={() => goToPage(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="px-4 py-2 mx-2 bg-gray-300 rounded disabled:bg-gray-100"
                >
                    Previous
                </button>
                <span className="px-4 py-2">Page {currentPage} of {totalPages}</span>
                <button
                    onClick={() => goToPage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 mx-2 bg-gray-300 rounded disabled:bg-gray-100"
                >
                    Next
                </button>
            </div>
        </section>
    );
}
