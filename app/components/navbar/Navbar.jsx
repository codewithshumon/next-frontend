import TransitionLink from '../global/TransitinLink';

const Navbar = () => {
  return (
    <div className="h-[80px] w-full flex items-center justify-center">
      <div className="px-4">
        <TransitionLink href={'/'} label="Home" />
      </div>
    </div>
  );
};

export default Navbar;
