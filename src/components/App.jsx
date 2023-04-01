import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FrendList/FrendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import user from '../components/Profile/user.json';
import data from '../components/Statistics/data.json';
import friends from '../components/FrendList/friends.json';
import transactions from '../components/TransactionHistory/transactions.json';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />;
      <TransactionHistory transactions={transactions} />
    </div>
  );
};
