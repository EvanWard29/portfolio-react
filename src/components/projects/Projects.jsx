import projects from "../../projects.json"
import Project from "./Project.jsx";

const Projects = () => {
    return (
        <section className="page-section portfolio" id="portfolio">
            <div className="container">
                {/*Portfolio Section Heading*/}
                <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Portfolio</h2>
                {/*Icon Divider*/}
                <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-star-fill svg-star" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                        </svg>
                    </div>
                    <div className="divider-custom-line"></div>
                </div>
                {/*Portfolio Grid Items*/}
                <div className="row justify-content-center">
                    {projects.map((project) => <Project key={project.id} id={project.id} title={project.title} description={project.description} />)}
                </div>
            </div>
        </section>
    )
}

export default Projects;