import NextImage from 'next/image';

export default function Home({}) {
  return (
    <>
      <NextImage
        layout="fill"
        objectFit="contain"
        src={`https://gh-card.dev/repos/7wataaa/wrapwith-for-jsx.svg?fullname=`}
        alt="Repository link image"
      />
    </>
  );
}

export const getStaticProps = () => {
  return {
    props: {},
  };
};
