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
    <Statistics stats={data} title="Upload stats" />
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />
  </div>
);

export { App };
