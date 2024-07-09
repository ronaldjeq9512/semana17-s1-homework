import React, { useState } from 'react';
import { Form } from './component/Form';
import { ListUser } from './component/ListUser';

interface User { 
  name: string; 
  lastName: string;
  id: number;
}

const Counter: React.FC = () => {
  const [users, setUsers] = useState<Array<User>>([]);

  const handleSubmit = (name: string, lastName: string, id: number) => {
    setUsers([...users, { name, lastName, id }]);
  }

  return (
    <section>
      <header>
        <h1>Registrar Usuario</h1>
      </header>
      <Form onSubmit={handleSubmit} />
       <ListUser users={users} />
    </section>
  );
};

export default Counter;
