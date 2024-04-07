import { useState, useEffect } from 'react';
import {click} from "@testing-library/user-event/dist/click";

let nextId = 0;
let runImg = "https://www.activeandrea.com/wp-content/uploads/2021/10/Untitled-design.jpg"
let skiImg = "https://cdn.shopify.com/s/files/1/0591/0511/6328/files/pexels-visit-almaty-848595_480x480.jpg?v=1648321699"
let yogaImg = "https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half-caption/public/field_blog_entry_images/2019-01/beach-beach-sports-coastline-68468_0.jpg?itok=Q4AWrDuy"
let climbImg = "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*Z26aVoP82tsO61i4JNgEbQ.jpeg"

export default function ActivityList() {
    const run_str = 'Run'
    const ski_str = 'Ski'
    const yoga_str = 'Yoga'
    const climb_str = 'Climb'
    const [run, setRun] = useState([])
    const [ski, setSki] = useState([])
    const [yoga, setYoga] = useState([])
    const [climb, setClimb] = useState([])

    const clickUpload = (e, set, activity) => {
        set([
            ...activity,
            { id: nextId++, name: e }
        ]);
    }

    const clickToPage = (e, set, activity) => {
        set([
            ...activity,
            { id: nextId++, name: e }
        ]);
    }

    return (
        <>
            <h1>Ad'Ventures:</h1>
            <div className="wrapper-activity">
                <div className="container">
                    <img className="activity-img" src={runImg} alt="Running image"></img>
                    <div className="centered">Running</div>
                    <button className="btn" onClick={()=>clickUpload(run_str, setRun, run)}>+ Add New</button>
                </div>
                <div className="container">
                    <img className="activity-img" src={skiImg} alt="Skiing image"></img>
                    <div className="centered">Skiing</div>
                    <button className="btn" onClick={()=>clickUpload(ski_str, setSki, ski)}>+ Add New</button>
                </div>
                <div className="container">
                    <img className="activity-img" src={yogaImg} alt="Yoga image"></img>
                    <div className="centered">Yoga</div>
                    <button className="btn" onClick={()=>clickUpload(yoga_str, setYoga, yoga)}>+ Add New</button>
                </div>
                <div className="container">
                    <img className="activity-img" src={climbImg} alt="Climbing image"></img>
                    <div className="centered">Climbing</div>
                    <button className="btn" onClick={()=>clickUpload(climb_str, setClimb, climb)}>+ Add New</button>
                </div>
            </div>
            <ul>
                {run.map(activity => (
                    <li key={activity.id}>{activity.name}</li>
                ))}
            </ul>
            <ul>
                {ski.map(activity => (
                    <li key={activity.id}>{activity.name}</li>
                ))}
            </ul>
            <ul>
                {yoga.map(activity => (
                    <li key={activity.id}>{activity.name}</li>
                ))}
            </ul>
            <ul>
                {climb.map(activity => (
                    <li key={activity.id}>{activity.name}</li>
                ))}
            </ul>
        </>
    );
}