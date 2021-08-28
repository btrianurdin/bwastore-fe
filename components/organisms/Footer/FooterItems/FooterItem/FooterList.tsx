export default function FooterList({ text, href }: { text: string, href: string }): JSX.Element {
  return (
    <li className="mb-6">
      <a href={href} className="text-lg color-palette-1 text-decoration-none">
        { text }
      </a>
    </li>
  );
}
