import { useState } from 'react';

// Форма для додавання нового завдання.
// Функцію onAddTask отримуємо через props від батьківського компонента App.
function UpdateList({ onAddTask }) {
  // Власний state компонента — текст, який користувач вводить у поле
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // забороняємо формі перезавантажувати сторінку

    // Валідація: порожнє завдання не додаємо
    if (value.trim()) {
      onAddTask(value.trim());
      setValue(''); // очищаємо поле
    }
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Нове завдання"
      />
      <button type="submit">Додати</button>
    </form>
  );
}

export default UpdateList;
