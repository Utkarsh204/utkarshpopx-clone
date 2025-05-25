import { useContext } from 'react';
import { UserContext } from '../UserContext';
import { Camera } from 'lucide-react';

export default function AccountSettings() {
  const { user } = useContext(UserContext);

  return (
    <div className="container">
      {/* White background title bar */}
      <div className="section-header">
        <h2 className="section-title">Account Settings</h2>
      </div>

      {/* Profile Section */}
      <div className="profile-section">
        <div className="profile-wrapper">
          <div className="profile-avatar">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="User"
              className="avatar-img"
            />
            <span className="camera-icon">
              <Camera size={14} color="white" />
            </span>
          </div>

          <div className="profile-info">
            <h4 className="profile-name">{user?.name || 'Marry Doe'}</h4>
            <p className="profile-email">{user?.email || 'Marry@Gmail.Com'}</p>
          </div>
        </div>

        <p className="profile-description">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
        </p>

        <hr className="divider" />
      </div>
    </div>
  );
}
