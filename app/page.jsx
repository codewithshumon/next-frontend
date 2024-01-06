import { Roboto } from 'next/font/google';
import TransitionLink from './components/global/TransitinLink';

const roboto = Roboto({
  weight: '900',
  subsets: ['latin'],
});

export default function Home() {
  return (
    <main className={roboto.className}>
      <section className="text-[200px] font-extrabold">Home Page</section>
      <section>
        <TransitionLink href={'/cursor-hover-mask'} label="Cursor Hover Mask" />
      </section>
    </main>
  );
}
