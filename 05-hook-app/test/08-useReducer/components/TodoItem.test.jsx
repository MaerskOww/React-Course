import { render, screen, fireEvent } from "@testing-library/react";
import { TodoItem } from "../../../src/08-useReducer/components/TodoItem";

describe('Pruebas en <TodoItem />', () => {

    const todo = {
        id: 1,
        description: 'Priedra del Alma',
        done: false,
    };

    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    beforeEach(() => jest.clearAllMocks());

    test('debe de mostrar el Todo pendiente de completar', () => {

        render(
            <TodoItem
                todo={todo}
                onToggleTodo={onToggleTodoMock}
                onDeleteTodo={onDeleteTodoMock}
            />
        );

        const liElement = screen.getByRole('listitem');
        expect(liElement.className).toBe('list-group-item d-flex justify-content-between');

        const spamElement = screen.getByLabelText('span');
        expect(spamElement.className).toContain('align-self-center');
        expect(spamElement.className).not.toContain('text-decoration-line-through');

    });

    test('debe de mostrar el Todo completado ', () => {

        todo.done = true;

        render(
            <TodoItem
                todo={todo}
                onToggleTodo={onToggleTodoMock}
                onDeleteTodo={onDeleteTodoMock}
            />
        );


        const spamElement = screen.getByLabelText('span');
        expect(spamElement.className).toContain('text-decoration-line-through');

    });

    test('el span debe de llamar el ToggleTodo cuando se hace click', () => {

        render(
            <TodoItem
                todo={todo}
                onToggleTodo={onToggleTodoMock}
                onDeleteTodo={onDeleteTodoMock}
            />
        );

        const spamElement = screen.getByLabelText('span');
        fireEvent.click(spamElement);

        expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id);

    });

    test('button debe de llamar el deleteTodo', () => {

        render(
            <TodoItem
                todo={todo}
                onToggleTodo={onToggleTodoMock}
                onDeleteTodo={onDeleteTodoMock}
            />
        );

        const buttonElement = screen.getByRole('button', { name: 'Borrar' });
        fireEvent.click(buttonElement);

        expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id);

    });

});