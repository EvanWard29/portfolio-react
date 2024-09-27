import PropTypes from "prop-types";
import {Button, Modal} from "react-bootstrap";
import {useState} from "react";

const Project = ({id, title, description, links, year, thumbnail}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            {/*Project Card*/}
            <div className="col-md-6 col-lg-4 mb-5">
                <div className="portfolio-item mx-auto shadow-sm" data-bs-toggle="modal"
                     data-bs-target={`#portfolioModal-${id}`} onClick={handleShow}>
                    <div
                        className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                        <div className="portfolio-item-caption-content text-center text-white"><i
                            className="fas fa-plus fa-3x"></i></div>
                    </div>
                    <img className="img-fluid img-thumbnail" src={thumbnail}
                         alt={title} width="900px" height="650"/>
                </div>
            </div>

            <Modal
                className={'portfolio-modal modal fade'}
                show={show}
                onHide={handleClose}
                backdrop
                keyboard={false}
                size={"xl"}
            >
                <Modal.Body className={"text-center pb-5 mt-5"}>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                {/*Portfolio Modal - Title*/}
                                <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">{title}</h2>
                                {/*Icon Divider*/}
                                <div className="divider-custom">
                                    <div className="divider-custom-line"></div>
                                    <div className="divider-custom-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                             className="bi bi-star-fill svg-star" viewBox="0 0 16 16">
                                            <path
                                                d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                        </svg>
                                    </div>
                                    <div className="divider-custom-line"></div>
                                </div>
                                {/*Portfolio Modal - Image*/}
                                <img className="img" src={thumbnail} alt={title}/>
                                {/*Portfolio Modal - Description*/}
                                <div className="text-start mt-3">
                                    <div dangerouslySetInnerHTML={{ __html: description }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer className={"border-0"}>
                    <Button variant={"primary"} onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

            {/*Project Modal*/}
            <div className="portfolio-modal modal fade" id={`#portfolioModal-${id}`} tabIndex="-1"
                 aria-labelledby={`#portfolioModal${id}`} aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header border-0">
                            <button className="btn-close" type="button" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                        </div>
                        <div className="modal-body text-center pb-5">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-8">
                                        {/*Portfolio Modal - Title*/}
                                        <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">{title}</h2>
                                        {/*Icon Divider*/}
                                        <div className="divider-custom">
                                            <div className="divider-custom-line"></div>
                                            <div className="divider-custom-icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                     className="bi bi-star-fill svg-star" viewBox="0 0 16 16">
                                                    <path
                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                                </svg>
                                            </div>
                                            <div className="divider-custom-line"></div>
                                        </div>
                                        {/*Portfolio Modal - Image*/}
                                        <img className="img"
                                             src={`src/assets/img/portfolio/${id}/thumbnail.webp`} alt={title}/>
                                        {/*Portfolio Modal - Description*/}
                                        <div className="text-start mt-3">
                                            {description}
                                        </div>
                                        <button className="btn btn-primary" data-bs-dismiss="modal">
                                            <i className="fas fa-xmark fa-fw"></i>
                                            Close Window
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

Project.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    links: PropTypes.arrayOf(PropTypes.string).isRequired,
    year: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired
}

export default Project;