import FooterList from './FooterItem/FooterList';
import FooterItem from './FooterItem';

export default function FooterItemConnect(): JSX.Element {
  return (
    <FooterItem title="Connect">
      <FooterList text="hi@store.gg" href="#" />
      <FooterList text="team@store.gg" href="#" />
      <FooterList text="Pasific 12, Jakarta Selatan" href="#" />
      <FooterList text="021 - 1122 - 9090" href="#" />
    </FooterItem>
  );
}
