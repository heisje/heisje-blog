import Link from 'next/link';

const Icon = ({ src }) => {
  return (
    <>
      <Link href={src}>
        <button>링크</button>
      </Link>
    </>
  );
};

export default Icon;
