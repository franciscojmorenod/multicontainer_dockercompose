// import '../styles.css';
import '../index.css';
const About = () => {

    return (
        <div className="blog-preview">
            <h1 >ABOUT PAGE</h1>
            <p> This page outlines a description of the Entire System</p>
            <h3 >TOP LEVEL STRUCTURE</h3>
            <h4> The system consists of 3 docker containers build from docker images</h4>
                <li>Frontend</li>
                <li>Backend</li>
                <li>DB</li>
            <h3>DOCKER IMAGES</h3>
                <li>multicontainer_dockercompose-frontend </li>
                <li>multicontainer_dockercompose-backend</li>
                <li>mariadb</li>                
            <h3 >DOCKER COMPOSE</h3>
            <h4> Create and Connect the 3 containers</h4>
            <h3 >FRONTEND</h3>
            <h4> Webpage that serves as an Interface to the User</h4>
            <h3 >BACKEND</h3>
            <h4> API that works as a server to carry out queries from the frontend to the database</h4>
            <h3>DB</h3>
            <h4> Mysql server</h4>
        </div>
    );
};

export default About;