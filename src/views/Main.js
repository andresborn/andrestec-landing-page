import Home from "../components/Home";
import Project from "../components/Project";
import swBlog from "../images/sw-blog-screenshot.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHtml5,
    faCss3,
    faJsSquare,
    faGit,
    faReact,
    faBootstrap,
    faPython,
} from "@fortawesome/free-brands-svg-icons";
import { faFlask } from "@fortawesome/free-solid-svg-icons";

const Main = () => {
    return (
            <div className="container">
                <Home />
                <Project title="StarWars Blog" link="github.com" date="February 2021" image={swBlog}
                    icons={[faHtml5, faCss3, faJsSquare, faReact, faBootstrap]} 
                 />
            </div>
    );
};

export default Main;
