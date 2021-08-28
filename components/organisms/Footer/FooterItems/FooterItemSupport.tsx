import FooterList from './FooterItem/FooterList';
import FooterItem from './FooterItem';

export default function FooterItemSupport(): JSX.Element {
  return (
    <FooterItem title="Support">
      <FooterList text="Refund Policy" href="#" />
      <FooterList text="Unlock Rewards" href="#" />
      <FooterList text="Live Chatting" href="#" />
    </FooterItem>
  );
}
