import React, { useState, useRef, useEffect } from 'react';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { projects } from './projectData';

export default function AllProjects() {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [currentPage, setCurrentPage] = useState(1);
    const [shouldScroll, setShouldScroll] = useState(false); // New state to track scroll action
    const titleRef = useRef<HTMLHeadingElement>(null);

    const categories = ['All', 'Next.js', 'React JS', 'Others'];
    const projectsPerPage = 6;

    const filteredProjects =
        selectedCategory === 'All'
            ? projects
            : projects.filter(project => project.category === selectedCategory);

    const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
    const startIndex = (currentPage - 1) * projectsPerPage;
    const currentProjects = filteredProjects.slice(startIndex, startIndex + projectsPerPage);

    const handleCategoryChange = (category: string) => {
        setSelectedCategory(category);
        setCurrentPage(1); // Reset to the first page when category changes
    };

    const handlePageChange = (newPage: number) => {
        setCurrentPage(newPage); // Update the current page
        setShouldScroll(true); // Set the scroll flag when pagination button is clicked
    };

    useEffect(() => {
        if (shouldScroll && titleRef.current) {
            // Scroll to the top of the section
            titleRef.current.scrollIntoView({ behavior: 'smooth' });
            setShouldScroll(false); // Reset scroll flag after scrolling
        }
    }, [currentPage, shouldScroll]); // Only run if currentPage or shouldScroll changes

    return (
        <section id="projects" ref={titleRef} className="py-20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="section-title opacity-0 animate-fade-in">
                        All Projects
                    </h2>
                    <p className="section-subtitle opacity-0 animate-fade-in-delay-1">
                        Explore my collection of projects
                    </p>
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map(category => (
                        <button
                            key={category}
                            onClick={() => handleCategoryChange(category)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                                selectedCategory === category
                                    ? 'bg-highlight-purple text-white'
                                    : 'bg-white/5 text-white/80 hover:bg-white/10'
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {currentProjects.map(project => (
                        <div
                            key={project.title}
                            className="glass-card p-4 rounded-xl opacity-0 animate-fade-in"
                        >
                            <div className="overflow-hidden rounded-lg h-48 mb-4">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                                />
                            </div>

                            <div className="p-2">
                                <h3 className="text-xl font-bold mb-2">{project.title}</h3>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies.map(tech => (
                                        <span
                                            key={tech}
                                            className="px-2 py-1 bg-white/5 rounded-full text-xs text-white/80"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-3">
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-primary text-sm py-1 px-3"
                                    >
                                        Live <ExternalLink size={14} className="ml-1" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* No Projects Found */}
                {filteredProjects.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-white/70">No projects found in this category.</p>
                    </div>
                )}

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="flex justify-center items-center gap-4 mt-12">
                        <button
                            onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
                            disabled={currentPage === 1}
                            className="px-4 py-2 bg-white/10 rounded text-white/80 hover:bg-white/20 disabled:opacity-40"
                        >
                            Previous
                        </button>
                        <span className="text-white/70 text-sm">
                            Page {currentPage} of {totalPages}
                        </span>
                        <button
                            onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
                            disabled={currentPage === totalPages}
                            className="px-4 py-2 bg-white/10 rounded text-white/80 hover:bg-white/20 disabled:opacity-40"
                        >
                            Next
                        </button>
                    </div>
                )}

                {/* GitHub Link */}
                {/* <div className="flex justify-center mt-16">
                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-highlight-purple hover:text-highlight-blue transition-colors duration-200"
                    >
                        View More on GitHub <ArrowUpRight size={18} className="ml-2" />
                    </a>
                </div> */}
            </div>
        </section>
    );
}
