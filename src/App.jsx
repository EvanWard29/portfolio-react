import './App.scss'
import Header from "./components/Header.jsx";
import About from "./components/About.jsx";
import Projects from "./components/projects/Projects.jsx";
import Skills from "./components/skills/Skills.jsx";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react"

function App() {
    return (
        <>
            <Header/>
            <Projects/>
            <About/>
            <Skills/>
            {/*Copyright Section*/}
            <div className="copyright py-4 text-center text-white">
                <div className="container"><small>Copyright &copy; Evan Ward {(new Date()).getFullYear()}</small></div>
            </div>
            <SpeedInsights/>
            <Analytics/>
        </>
    )
}

export default App
