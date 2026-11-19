import TodoItem from './TodoItem';

// Список завдань. Сам нічого не змінює — лише показує дані, отримані через props,
// і передає функції далі в кожен TodoItem.
function TodoList({ tasks, onToggle, onEdit, onDelete }) {
  if (tasks.length === 0) {
    return <p className="empty">Завдань поки немає</p>;
  }

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}

export default TodoList;
