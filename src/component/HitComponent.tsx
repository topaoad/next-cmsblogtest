import Link from "next/link";
import { Hit } from "react-instantsearch-core";

interface HitDoc {
  objectID: string;
  title: string;
  body: string;
}

interface Props {
  hit: Hit<HitDoc>;
}

interface HitComponentProps extends Props {
  onClick: () => void;
}

function HitComponent({ hit }: HitComponentProps): JSX.Element {
  return (
    <div>
      <Link href={hit.body}>
        <a className="hover:text-[#06bbbc]">{hit.title}</a>
      </Link>
    </div>
  );
}

export const hitComponent = ({ hit }: Props): JSX.Element => (
  <HitComponent hit={hit} onClick={() => null} />
);
