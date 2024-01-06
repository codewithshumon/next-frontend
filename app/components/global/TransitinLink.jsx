'use client';

import { usePathname, useRouter } from 'next/navigation';
import { animatePageOut } from '@/animations';

export default function TransitionLink({ href, label }) {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = () => {
    if (pathname === href) {
      router.refresh();
      return;
    }
    animatePageOut({ href, router });
  };

  return (
    <button
      className="border-[1px] border-black p-4 rounded-xl hover:bg-black hover:text-neutral-100 cursor-pointer"
      onClick={handleClick}
    >
      {label}
    </button>
  );
}
