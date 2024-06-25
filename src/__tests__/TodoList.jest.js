import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TodoList from '../TodoList';

const sampleTodos = [
  { text: 'Task 1', isCompleted: false },
  { text: 'Task 2', isCompleted: true },
];

test('TodoList renders correctly', () => {
  const { getByText } = render(<TodoList todos={sampleTodos} />);
  const task1Element = getByText('Task 1');
  const task2Element = getByText('Task 2');
  expect(task1Element).toBeInTheDocument();
  expect(task2Element).toBeInTheDocument();
});

test('Completing a task in TodoList calls completeTodo', () => {
  const completeTodoMock = jest.fn();
  const { getByText } = render(<TodoList todos={sampleTodos} completeTodo={completeTodoMock} />);
  const task1Element = getByText('Task 1');
  fireEvent.click(task1Element);

  expect(completeTodoMock).toHaveBeenCalledWith(0);
});

test('Deleting a task in TodoList calls removeTodo', () => {
  const removeTodoMock = jest.fn();
  const { getByTestId } = render(<TodoList todos={sampleTodos} removeTodo={removeTodoMock} />);
  const deleteButton = getByTestId('delete-button-1');
  fireEvent.click(deleteButton);

  expect(removeTodoMock).toHaveBeenCalledWith(1); // Assuming Task 2 is index 1 in the sampleTodos array
});
