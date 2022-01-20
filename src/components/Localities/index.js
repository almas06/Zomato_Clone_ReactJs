import React from 'react'
import { Link, BrowserRouter as Router, } from 'react-router-dom'
import './localities.css'

const localities = [
    {
        id:1,
        place:"Baner (911 places)",
    },
    {
        id:2,
        place:"Viman Nagar (958 places)",
    },
    {
        id:3,
        place:"Hinjawadi (1102 places)",
    },
    {
        id:4,
        place:"Koregaon Park (255 places)",
    },
    {
        id:5,
        place:"Wakad (1160 places)",
    },
    {
        id:6,
        place:"Kothrud (1149 places)",
    },
    {
        id:7,
        place:"Kalyani Nagar (223 places)",
    },
    {
        id:8,
        place:"Kharadi (1028 places)",
    },
    {
        id:9,
        place:"Mundhwa (265 places)",
    },
    {
        id:10,
        place:"Hadapsar (1407 places)",
    },
    {
        id:11,
        place:"Aundh (480 places)",
    },
    {
        id:12,
        place:"FC Road (113 places)",
    },
    {
        id:13,
        place:"Camp Area (281 places)",
    },
    {
        id:14,
        place:"Chinchwad (726 places)",
    },
    {
        id:15,
        place:"Shivaji Nagar (279 places)",
    },
    {
        id:16,
        place:"Sinhgad Road (824 places)",
    },
    {
        id:17,
        place:"Yerawada (260 places)",
    },
    {
        id:18,
        place:"Kondhwa (687 places)",
    },
]

const Localities = () => {
    return (
        <Router>
            <div className="localities-wrapper">
            <h2>Popular localities in and around <b>Pune</b></h2>
            <div className="localities-row">
                {localities.map((locality)=>{
                    return(
                        <div className="localities-col">
                            <h4>{locality.place}</h4>
                            <Link to="/"><i class="fa fa-angle-right"></i></Link>
                        </div>
                    )
                })}
                
            </div>
        </div>
        </Router>
    )
}

export default Localities

