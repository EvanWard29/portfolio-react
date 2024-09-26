import cv from "../assets/Evan_Ward-CV.pdf";
const About = () => {
    return (
        <section className="page-section bg-primary text-white mb-0" id="about">
            <div className="container">
                {/*About Section Heading*/}
                <h2 className="page-section-heading text-center text-uppercase text-white">About</h2>
                {/*Icon Divider*/}
                <div className="divider-custom divider-light">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-star-fill svg-star"
                             viewBox="0 0 16 16">
                            <path
                                d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                        </svg>
                    </div>
                    <div className="divider-custom-line"></div>
                </div>
                {/*About Section Content*/}
                <div className="text-center lead">
                    <p>Hi! My name is Evan.</p>
                    <p>I'm a dedicated PHP/Laravel developer with extensive experience in developing backend features
                        and APIs within the Laravel framework.</p>
                    <p>My journey in PHP and Laravel has been fueled by a passion for continuous learning and an
                        unwavering attention to detail.</p>
                    <p>I thrive on solving complex problems and delivering robust solutions that ensure reliability,
                        security, and performance.</p>
                    <p>Here you'll find a collection of projects and accomplishments I am most proud of.</p>
                </div>
                {/*About Section Button*/}
                <div className="text-center mt-4">
                    <a className="btn btn-xl btn-outline-light" href={cv}
                       target="_blank">
                        <i className="fas fa-download me-2"></i>
                        View CV
                    </a>
                </div>
            </div>
        </section>
    )
}

export default About;