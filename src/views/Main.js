import Home from "../components/Home";
import Project from "../components/Project";
import swBlog from "../images/sw-blog-screenshot.png";
import kaChing from "../images/kaching-pie-chart.png";
import ticTacToe from "../images/tic-tac-toe.png";
import {
    faHtml5,
    faCss3,
    faJsSquare,
    faGit,
    faReact,
    faBootstrap,
    faPython
} from "@fortawesome/free-brands-svg-icons";
import { faFlask, faDatabase } from "@fortawesome/free-solid-svg-icons";

const Main = () => {
    return (
            <div className="container">
                <Home />
                <Project title="kaChing!" 
                codeLink="https://github.com/andresborn/Proyecto-Final-4Geeks" 
                date="March 2021"
                liveLink="http://kachingcr.herokuapp.com/"
                image={kaChing} 
                icons={[faJsSquare, faReact, faPython, faBootstrap, faDatabase, faGit]} 
                description="kaChing! is a budget tracker that lets users keep track of their income and expenses on a monthly and weekly basis. This project uses React for the Client-Side, Flux and Context API to organize the data distribution, React Router Dom to handle routing, Chart.js for data visualization and Bootstrap for styling. The Back-End is built with Python Flask, SQLAlchemy for the data models and querying, and PostgreSQL for the database." />
                <Project title="StarWars Blog" 
                codeLink="https://github.com/andresborn/sw-blog" 
                date="February 2021" 
                image={swBlog}
                liveLink="https://andresborn.github.io/sw-blog/"    
                icons={[faHtml5, faCss3, faJsSquare, faReact, faBootstrap]}
                description="This StarWars blog fetches data from SWAPI.dev to populate its views. Uses Flux architecture to maintain the data and its logic in one place. Distributes the data accross the app using the Context API. Uses Routing to switch views and has a filterable search bar to access the items, you can also store your favorite characters in LocalStorage."
                 />
                 <Project title="Tic-Tac-Toe"
                 codeLink="https://github.com/andresborn/ttt-react"
                 date="February 2021"
                 image={ticTacToe}
                 liveLink="https://andresborn.github.io/ttt-react/"
                 icons={[faHtml5, faCss3, faJsSquare, faReact]}
                 description="This game was built following the reactjs.org tutorial. We applied concepts like scope, state and rendering in React. Each Square component receives the current State of the board as props. Then, each Square handles a function that changes the state, regarding their postion. Finally, the square 'listens' to the state and the change is rendered accordingly. Rendering in React is very efficient." />
            </div>
    );
};

export default Main;
