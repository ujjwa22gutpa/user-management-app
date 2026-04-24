import UserCard from './UserCard';

export default function UserList({ users, onSelectUser, selectedUserId }) {
  return (
    <div className="user-list">
      {users.map((user) => (
        <UserCard
          key={user.id}
          user={user}
          onClick={() => onSelectUser(user)}
          isSelected={user.id === selectedUserId}
        />
      ))}
    </div>
  );
}
