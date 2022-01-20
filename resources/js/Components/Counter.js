import React, { useEffect, useState, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '@/Store/Slices/api'

export function Counter() {
    const count = useSelector((state) => state.api.data)

    const [book, setState] = useState(null);
    const dispatch = useDispatch();

    const url = 'https://jsonplaceholder.typicode.com/todos';

    const fetchPhotos = async () => {
        await fetch(url)
            .then(response => response.json())
            .then(data => setState(data));
    }

    useEffect(() => {
        fetchPhotos()
    }, []);

    console.log(book)

    return (
        <div>
            <div>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    Increment
                </button>
                <ul>
                    {book && book.map(el => (
                        <li key={el.id}>{el.title}</li>
                    ))}
                </ul>
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    Decrement
                </button>
            </div>
        </div>
    )
}
