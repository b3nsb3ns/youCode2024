import { useState, useEffect } from 'react';

let nextId = 0;

export default function ActivityList() {
    const [name, setName] = useState('');
    const [activities, setActivities] = useState([])

    return (
        <>
            <h1>Activities:</h1>
            <input
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <button onClick={() => {
                setActivities([
                    ...activities,
                    { id: nextId++, name: name }
                ]);
                localStorage.setItem('activities', name);
            }}>Add Activity</button>
            <ul>
                {activities.map(activity => (
                    <li key={activity.id}>{activity.name}</li>
                ))}
            </ul>
        </>
    );
}