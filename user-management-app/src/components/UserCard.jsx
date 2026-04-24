export default function UserCard({ user, onClick, isSelected }) {
  return (
    <div
      className={`user-card ${isSelected ? 'selected' : ''}`}
      onClick={onClick}
    >
      <h4>{user.name}</h4>
      <p>{user.email}</p>
    </div>
  );
}
