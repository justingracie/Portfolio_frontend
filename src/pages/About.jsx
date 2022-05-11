import { useState, useEffect } from 'react';

function About(props) {
    //Create state that will hold the about data
    const [about, setAbout] = useState(null);
    //Create function to make api call, is projects.json acting as our API?
    const getAboutData = async () =>{
        //make api call and get response
        const response = await fetch(props.URL + "about");
        //turn response into javascript object
        const data = await response.json();
        //set the about state to the data
        setAbout(data);
    };
    // make an initla call for the data inside useEffect, so it only ////happens once on component load [] brackets does the one deployment.
    useEffect(() => getAboutData(), []);
    //function that returns the JSX needed once data is fetched
    const loaded = () => (
        <div>
            <h2>{about.name}</h2>
            <h3>{about.email}</h3>
            <p>{about.bio}</p>
        </div>
    );
    //if data arrives return the result of loaded, if not, an h1 that says loading
    return about ? loaded() : <h1>Loading...</h1>;
}

export default About;

