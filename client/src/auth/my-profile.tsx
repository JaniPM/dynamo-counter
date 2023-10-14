import React from 'react';

type Props = {
  username?: string;
  onLogout: () => void;
};

/**
 * Renders information about the currently logged in user and a logout link.
 */
const MyProfile = ({ username, onLogout }: Props) => (
  <h3>
    Logged in as {username} (
    <a href="#" onClick={onLogout}>
      logout
    </a>
    )
  </h3>
);

export default MyProfile;
