import NextImage from 'next/image';

export default function Home(props) {
  return <>{props.repositoryOGP}</>;
}

export const getStaticProps = () => {
  const repositoryOGP = (
    <NextImage
      layout="fill"
      objectFit="contain"
      src={`https://github.com/7wataaa/wrapwith-for-jsx`}
      alt="Repository link image"
    />
  );
  return {
    props: { repositoryOGP },
  };
};
