import { useState, useEffect } from 'react';
import {click} from "@testing-library/user-event/dist/click";

let nextId = 0;

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

    return (
        <>
            <h1>Activities:</h1>
            <img src="../public/run.jpg" alt="Italian Trulli"></img>
            <button onClick={()=>clickUpload(run_str, setRun, run)}>Add New</button>
            <button onClick={()=>clickUpload(ski_str, setSki, ski)}>Add New</button>
            <button onClick={()=>clickUpload(yoga_str, setYoga, yoga)}>Add New</button>
            <button onClick={()=>clickUpload(climb_str, setClimb, climb)}>Add New</button>
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