import { useState } from 'react';

let nextId = 0;

export default function WardrobeList() {
    const [name, setName] = useState('');
    const [wardrobe, setWardrobe] = useState([])

    return (
        <>
            <h1>Wardrobe:</h1>
            <input
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <button onClick={() => {
                setWardrobe([
                    ...wardrobe,
                    { id: nextId++, name: name }
                ]);
            }}>Add Activity</button>
            <ul>
                {wardrobe.map(activity => (
                    <li key={activity.id}>{activity.name}</li>
                ))}
            </ul>
        </>
    );
}