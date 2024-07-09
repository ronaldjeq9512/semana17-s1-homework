import React, { useState } from 'react';

interface FormProps {
    onSubmit: (name: string, lastName: string, idUser: number) => void;
}

export const Form = ({onSubmit}: FormProps) => {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
  
    console.log('Se renderizo el componente');
   
    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setName(event.target.value);
    };
  
    const handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setLastName(event.target.value);
    };
  
    const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const idUser = new Date().getTime()
        onSubmit(name, lastName, idUser);
        setName('');
        setLastName('');
    }

    return (
        <form action="" onSubmit={submitForm}>
            <div>
                <label htmlFor="name">Nombre: </label>
                <input value={name} id="name" onChange={handleNameChange} type="text" />
            </div>
            <div>
                <label htmlFor="lastName">Apellido: </label>
                <input value={lastName} id="lastName" onChange={handleLastNameChange} type="text" />
            </div>
            <button type="submit">Enviar</button>
        </form>
    );
};
