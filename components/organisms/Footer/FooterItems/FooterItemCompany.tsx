import FooterList from './FooterItem/FooterList';
import FooterItem from './FooterItem';

export default function FooterItemCompany(): JSX.Element {
  return (
    <FooterItem title="Company">
      <FooterList text="About Us" href="#" />
      <FooterList text="Refund Policy" href="#" />
      <FooterList text="Terms of Use" href="#" />
      <FooterList text="Privacy & Policy" href="#" />
    </FooterItem>
  );
}
