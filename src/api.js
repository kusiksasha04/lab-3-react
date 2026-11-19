import axios from 'axios';

// Усі запити до сервера зібрані в одному файлі.
// JSONPlaceholder — безкоштовний тестовий API: він відповідає на запити,
// але насправді нічого не зберігає (після перезавантаження сторінки зміни зникнуть).
const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

// GET — отримати список завдань (беремо лише перші 5)
export async function getTasks() {
  const response = await api.get('/todos', { params: { _limit: 5 } });
  return response.data;
}

// POST — створити нове завдання
export async function createTask(task) {
  const response = await api.post('/todos', task);
  return response.data;
}

// PATCH — змінити одне або кілька полів завдання (назву чи статус)
export async function updateTask(id, changes) {
  const response = await api.patch(`/todos/${id}`, changes);
  return response.data;
}

// DELETE — видалити завдання
export async function deleteTask(id) {
  await api.delete(`/todos/${id}`);
}
