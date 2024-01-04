import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: '900',
  subsets: ['latin'],
});

export default function Home() {
  return (
    <main className={roboto.className}>
      <section className="text-[200px] font-extrabold">Home Page</section>
    </main>
  );
}
