import React, { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import NewSongForm from './NewSongForm';

const SongList = () => {
    const [state, setState] = useState([
        {title: 'almost home', id: uuid()},
        {title: 'this wild darknes', id: uuid()},
        {title: 'gangsta paradise', id: uuid()},
    ]);

    const [age, setAge] = useState(20);

    const addSong = (title) => {
        setState([...state ,{ title, id: uuid() }])
    }

    useEffect(() => {
        console.log('useEffect hook run state', state)
    }, [state])

    useEffect(() => {
        console.log('useEffect hook run age', age)
    }, [age])

    return (
        <div className="song-list">
            <ul>
            {state.map((song) => <li key={song.id}>{song.title}</li>)}
            </ul>
            <NewSongForm addSong={addSong} />
            <button onClick={() => setAge(age + 1)}>Add 1 to age: {age}</button>
        </div>
    )
}

export default SongList;