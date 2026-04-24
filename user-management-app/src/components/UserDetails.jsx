export default function UserDetails({ user }) {
  if (!user) {
    return (
      <div className="user-details">
        <p className="no-user">Select a user to view details</p>
      </div>
    );
  }

  return (
    <div className="user-details">
      <h3>{user.name}</h3>
      
      <div className="detail-item">
        <strong>Username:</strong> {user.username || 'N/A'}
      </div>

      <div className="detail-item">
        <strong>Email:</strong> {user.email}
      </div>

      <div className="detail-item">
        <strong>Phone:</strong> {user.phone}
      </div>

      <div className="detail-item">
        <strong>Website:</strong> {user.website ? <a href={`http://${user.website}`} target="_blank" rel="noopener noreferrer">{user.website}</a> : 'N/A'}
      </div>

      {user.address && (
        <div className="detail-item">
          <strong>City:</strong> {user.address.city || 'N/A'}
        </div>
      )}

      {user.company && (
        <div className="detail-item">
          <strong>Company:</strong> {user.company.name || 'N/A'}
        </div>
      )}
    </div>
  );
}
