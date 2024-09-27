import profileImg from '../assets/img/profile.webp'
import {Container, Nav, Navbar, Offcanvas} from "react-bootstrap";

const Header = () => {
    return (
        <>
            {/*Navigation*/}
            <Navbar collapseOnSelect expand={"lg"} className={"bg-secondary text-uppercase fixed-top"} id={"mainNav"}>
                <Container>
                    <Navbar.Brand href={"#page-top"}>Evan Ward</Navbar.Brand>
                    <Navbar.Toggle aria-controls={"offCanvasNavbar"} className={""}/>
                    <Navbar.Offcanvas id={"offCanvasNavbar"} placement={"top"} scroll={true} backdrop={true} className={"h-25"}>
                        <Offcanvas.Body className={"bg-secondary text-uppercase"}>
                            <Nav id={"navBody"} className={"justify-content-end flex-grow-1 pe-3"}>
                                <Nav.Link href={"#portfolio"} className={"py-3 px-0 px-lg-3 rounded"}>Portfolio</Nav.Link>
                                <Nav.Link href={"#about"} className={"py-3 px-0 px-lg-3 rounded"}>About</Nav.Link>
                                <Nav.Link href={"#skills"} className={"py-3 px-0 px-lg-3 rounded"}>Skills</Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
            {/*Masthead*/}
            <header className="masthead bg-primary text-white text-center">
                <div className="container d-flex align-items-center flex-column">
                    {/*Masthead Avatar Image*/}
                    <img className="mb-5 rounded-circle" width="320px" height="320px" src={profileImg} alt="..." />
                    {/*Masthead Heading*/}
                    <h1 className="masthead-heading text-uppercase mb-0">Evan Ward</h1>
                    {/*Icon Divider*/}
                    <div className="divider-custom divider-light">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-star-fill svg-star" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                        </div>
                        <div className="divider-custom-line"></div>
                    </div>
                    {/*Masthead Subheading*/}
                    <p className="masthead-subheading font-weight-light mb-0">PHP/Laravel Developer</p>
                    <div className="row">
                        <div className="col">
                            <a className="link-light text-decoration-none" href="https://www.linkedin.com/in/evan-richard-ward/" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                                </svg>
                            </a>
                        </div>
                        |
                        <div className="col">
                            <a className="link-light text-decoration-none" href="https://github.com/EvanWard29" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;