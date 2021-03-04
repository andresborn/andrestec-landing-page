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
                <Project title="StarWars Blog" link="https://github.com/andresborn/sw-blog" date="February 2021" image={swBlog}
                    icons={[faHtml5, faCss3, faJsSquare, faReact, faBootstrap]}
                    description="This StarWars blog fetches data from SWAPI.dev to populate its views. Uses Flux architecture to maintain the data and its logic in one place. Distributes the data accross the app using the Context API. Uses Routing to switch views and has a filterable search bar to access the items, you can also store your favorite characters in LocalStorage." 
                 />
            </div>
    );
};

export default Main;
