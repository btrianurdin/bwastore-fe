interface Props {
  title: string;
  children: any;
}

export default function FooterItem({ title, children }: Props): JSX.Element {
  return (
    <div className="col-md-4 col-6 mb-lg-0 mb-25">
      <p className="text-lg fw-semibold color-palette-1 mb-12">{ title }</p>
      <ul className="list-unstyled">
        { children }
      </ul>
    </div>
  );
}
