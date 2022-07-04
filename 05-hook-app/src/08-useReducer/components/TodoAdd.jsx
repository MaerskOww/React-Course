import { useRef } from 'react';
import { useForm } from '../../hooks/useForm'

export const TodoAdd = ({ onNewTodo }) => {

    const inputRef = useRef();

    const { description, onInputChange, onResetForm } = useForm({
        description: '',
    });

    const onFormSubmit = (e) => {
        e.preventDefault();
        if (description.length <= 1) {
            inputRef.current.select();
            return;
        }
        const newTodo = {
            id: new Date().getTime(),
            description,
            done: false,
        }

        onNewTodo(newTodo);
        onResetForm();
    }

    return (
        <form onSubmit={onFormSubmit}>
            <input
                type="text"
                placeholder="¿Qué hay que hacer?"
                className="form-control"
                name="description"
                value={description}
                onChange={onInputChange}
                ref={inputRef}
            />
            <button
                type="submit"
                className="btn btn-outline-primary mt-1"
            >
                Agregar
            </button>
        </form>
    )
}
