'use client';

//Tutorial Github Link: https://github.com/josiah-brown/page-transitions-with-gasp-and-next
//Tutorial Blog Link: https://medium.com/@josiah.webdev/page-transitions-with-gsap-next-js-app-router-5508cee43a80

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
