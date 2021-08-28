import Footer from './Footer';
import MenuItem from './MenuItem';
import Profile from './Profile';

interface Props {
  activeMenu: 'overview' | 'transactions' | 'settings';
}

export default function Sidebar({ activeMenu }: Props): JSX.Element {
  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <Profile />
        <div className="menus">
          <MenuItem title="Overview" icon="menu-overview" href="/member" active={activeMenu === 'overview'} />
          <MenuItem title="Transactions" icon="menu-transactions" href="/member/transactions" active={activeMenu === 'transactions'} />
          <MenuItem title="Messages" icon="menu-messages" href="/member" />
          <MenuItem title="Card" icon="menu-card" href="/member" />
          <MenuItem title="Rewards" icon="menu-rewards" href="/member" />
          <MenuItem title="Settings" icon="menu-settings" href="/member/edit-profile" active={activeMenu === 'settings'} />
          <MenuItem title="Logout" icon="menu-logout" href="/member/sign-in" />
        </div>
        <Footer />
      </div>
    </section>
  );
}
