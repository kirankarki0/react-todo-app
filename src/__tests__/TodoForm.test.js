import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TodoForm from '../TodoForm';

test('TodoForm renders correctly', () => {
  const { getByPlaceholderText } = render(<TodoForm />);
  const inputElement = getByPlaceholderText('Add a new task');
  expect(inputElement).toBeInTheDocument();
});

test('Submitting TodoForm calls addTodo', () => {
  const addTodoMock = jest.fn();
  const { getByPlaceholderText, getByText } = render(<TodoForm addTodo={addTodoMock} />);
  const inputElement = getByPlaceholderText('Add a new task');
  const addButton = getByText('Add');

  fireEvent.change(inputElement, { target: { value: 'Test Task' } });
  fireEvent.click(addButton);

  expect(addTodoMock).toHaveBeenCalledWith('Test Task');
});
