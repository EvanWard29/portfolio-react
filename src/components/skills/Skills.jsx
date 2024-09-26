import skills from "../../skills.json";

import Language from "./Language.jsx"
import Quality from "./Quality.jsx";
import Technical from "./Technical.jsx";

const Skills = () => {
    return (
        <section className="page-section" id="skills">
            <div className="container">
                {/*Skills Section Heading*/}
                <h2 className="page-section-heading text-center text-uppercase text-secondary">Skills</h2>
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
                {/*Skills Section Content*/}
                <div className="row align-items-md-stretch">
                    {/*Languages*/}
                    <div className="col" id="languages">
                        <div className="card h-100">
                            <div className="card-body">
                                <h3 className="card-title text-secondary">Languages</h3>
                                {skills.languages.map((language) => <Language key={language.id} description={language.description} percent={language.percent}/>)}
                            </div>
                        </div>
                    </div>
                    <div className="d-lg-none w-100 mb-4"></div>
                    {/*Qualities*/}
                    <div className="col" id="qualities">
                        <div className="row">
                            <div className="col">
                                <div className="card h-100">
                                    <div className="card-body">
                                        <h3 className="card-title text-secondary">Qualities</h3>
                                        <ul className="lead h-100">
                                            {skills.qualities.map((quality, i) => <Quality key={i} description={quality.description}/>)}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="w-100 mb-4"></div>
                            <div className="col">
                                <div className="card h-100">
                                    <div className="card-body">
                                        <h3 className="card-title text-secondary">Technical Skills</h3>
                                        <ul className="lead h-100">
                                            {skills.technicals.map((technical, i) => <Technical key={i} description={technical.description}/>)}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills;