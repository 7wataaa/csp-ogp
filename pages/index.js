import NextImage from 'next/image';

export default function Home() {
  return (
    <NextImage
      layout="fill"
      objectFit="contain"
      src={`https://github.com/7wataaa/wrapwith-for-jsx`}
      alt="Repository link image"
    />
  );
}
