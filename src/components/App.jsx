import { Profile } from './Profile/Profile.jsx';

import user from '../data/user.json';

const App = () => (
  <div className="app-wrapper">
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
  </div>
);

export { App };