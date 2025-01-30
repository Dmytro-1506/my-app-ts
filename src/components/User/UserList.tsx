// **Техническое задание:**
// 1. Создать React-приложение, которое загружает и отображает список пользователей из внешнего API.
// 2. Использовать API: `https://jsonplaceholder.typicode.com/users`.
// 3. Приложение должно быть написано с использованием TypeScript.
// 4. Должен быть компонент `UserList.tsx`, который отображает список пользователей.
// 5. Должен быть компонент `UserItem.tsx`, который отображает одного пользователя.
// 6. Использовать `axios` для загрузки данных.
// 7. Применить хуки `useState` и `useEffect` для работы с данными.

import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Определяем интерфейс пользователя
interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
}

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios.get<User[]>('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError('Ошибка загрузки данных');
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Список пользователей</h1>
      <ul>
        {users.map(user => (
          <UserItem key={user.id} user={user} />
        ))}
      </ul>
    </div>
  );
};

const UserItem: React.FC<{ user: User }> = ({ user }) => {
  return (
    <li>
      <h3>{user.name}</h3>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
    </li>
  );
};

export default UserList;
