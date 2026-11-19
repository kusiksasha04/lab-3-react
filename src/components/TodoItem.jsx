import { useState } from 'react';

// Одне завдання у списку.
// Має два режими: звичайний перегляд і режим редагування.
function TodoItem({ task, onToggle, onEdit, onDelete }) {
  const [isEditing, setIsEditing] = useState(false); // чи ми зараз редагуємо
  const [text, setText] = useState(task.title); // текст у полі редагування

  const startEditing = () => {
    setText(task.title);
    setIsEditing(true);
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onEdit(task.id, text.trim()); // функція з App, отримана через props
      setIsEditing(false);
    }
  };

  // Умовний рендеринг: у режимі редагування показуємо форму
  if (isEditing) {
    return (
      <li className="task">
        <form className="edit-form" onSubmit={handleSave}>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            autoFocus
          />
          <button type="submit">Зберегти</button>
          <button type="button" className="secondary" onClick={() => setIsEditing(false)}>
            Скасувати
          </button>
        </form>
      </li>
    );
  }

  return (
    <li className={task.completed ? 'task done' : 'task'}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
      />
      <span className="task-title">{task.title}</span>
      <button className="secondary" onClick={startEditing}>
        Редагувати
      </button>
      <button className="danger" onClick={() => onDelete(task.id)}>
        Видалити
      </button>
    </li>
  );
}

export default TodoItem;
