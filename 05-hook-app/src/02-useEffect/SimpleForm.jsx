import { useEffect, useState } from 'react'
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'MaerskOw',
        email: 'danie.guasamucaro@gmail.com'
    });

    const { username, email } = formState;

    useEffect(() => {
        // console.log('useEffect Called!');
    }, []);

    useEffect(() => {
        // console.log('formState changed!');
    }, [formState]);

    useEffect(() => {
        // console.log('email changed!');
    }, [email]);

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value,
        })
    };

    return (
        <>
            <h1>Formulario Simple</h1>
            <hr />
            <input
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={username}
                onChange={onInputChange}
            />
            <input
                type="email"
                className="form-control mt-2"
                placeholder="daniel.guasamucaro@gmail.com"
                name="email"
                value={email}
                onChange={onInputChange}
            />

            {
                (username === 'MaerskOw') && <Message />
            }
        </>
    )
}
