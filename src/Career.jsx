import './Career.css'
import { useState } from 'react';

const jobs = [{
    id: 1,
    title: "Frontend Developer",
    location: "Remote",
    experience: "1+ years",
    skills:"Html ,dsa ,mongodb , javascript"
},
{
    id: 2,
    title: "Backend Developer",
    location: "Hybrid",
    experience: "2+ years",
        skills:"Html ,css ,javascript",
}, {
    id: 3,
    title: "Web Developer",
    location: "Hybrid",
    experience: "2+ years",
    skills:"Html ,css ,javascript ,web application ,responsive design",
}
    , {
    id: 4,
    title: "Software Developer",
    location: "Hybrid",
    experience: "5+ years",
    skills:"Html,java,c++,javascript,dsa",
},
    , {
    id: 5,
    title: "Software Engineer",
    location: "Hybrid",
    experience: "5+ years",
    skills:"Html,css,javascript react,sql,Oracle",
},
]
const Career = () => {
    const [showAll, setShowAll] = useState(false);
    const jobsToDisplay = showAll ? jobs : jobs.slice(0, 3);


    return (
        <>



            <div className="career-container">
                <h1>Career</h1>
                <p>Join our team and build your future with us.</p>
            <p>Be a part of a dynamic team that's shaping the future of</p>

                <h3>Explore Openings</h3>
                <div className="jobs-container"> 


                {jobsToDisplay.map((job) => (
                    <>
                   
                    <div className="jobs" key={job.id}>

                        <h2 className="job">{job.title}</h2>
                        <p>Location: {job.location}</p>
                        <p>Experience: {job.experience}</p>
                        <p className='skills'>{job.skills}</p>

                  
                        <button >Apply Now</button>
                    </div>
                    </>
                ))}
                </div>


                {jobs.length > 3 && (
        <button 
          className="show-more" 
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? 'Show Less' : 'Show More Jobs'}
        </button>
      )}

            </div>
        </>
    )
}

export default Career