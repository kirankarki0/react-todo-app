import React from 'react';

const TodoList = ({ todos, completeTodo, removeTodo }) => {
    const handleKeyPress = (event, index) => {
        if (event.key === 'Enter' || event.key === ' ') {
            completeTodo(index);
        }
    };

    return (
        <div className="todo-list">
            {todos.map((todo, index) => (
                <div
                    key={index}
                    className={`todo ${todo.isCompleted ? 'completed' : ''}`}
                >
                    <span
                        tabindex="0"
                        onClick={() => completeTodo(index)}
                        onKeyDown={(event) => handleKeyPress(event, index)}
                        role="button"
                        aria-pressed={todo.isCompleted}>
                        {todo.text}
                    </span>
                    <button
                        tabindex="0"
                        onClick={() => removeTodo(index)}
                        data-testid={`delete-button-${index}`}>
                        Delete
                    </button>
                </div>
            ))}
        </div>
    );
};

export default TodoList;
