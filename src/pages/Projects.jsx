import { useState, useEffect} from 'react';

function Projects(props) {
    //create a stat to hold projects
    const [projects, setProjects] = useState(null);
    //function to make an API call
    const getProjectsData = async () => {
        //make api call and get a response
        const response = await fetch(props.URL + "projects");
        const data = await response.json();
        //set projects state to the data
        setProjects(data);
    };
    //make and initial call for the data inside of useEffect, only to happen one time
    useEffect(() => getProjectsData(), []);
    //define a function that will return the JSX needed once we get the data
    const loaded = () => {
        //add a key?
        return projects.map((project) => (
            <div>
                <h1>{project.name}</h1>
                <img src={project.image} />
                <a href={project.git}>
                    <button>Github</button>
                </a>
                <a href={project.live}>
                    <button>live site</button>
                </a>
            </div>
        ));
    };
    return projects ? loaded () : <h1>Loading...</h1>
  }
  export default Projects;