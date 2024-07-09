
interface User { 
    name: string; 
    lastName: string;
    id: number;
}

interface ListUserProps {
    users: User[]
}

export const ListUser = ({users}: ListUserProps) => {
    return (
        <div>
            {users.map((user: User) => (
                <p>{user.lastName} {user.name}</p>
            ))}
        </div>
        
    )
}