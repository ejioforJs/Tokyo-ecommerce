import { useState } from 'react';
import {AiOutlineClose} from 'react-icons/ai'

const Sidebar = (props) => {
  const cartprops = props
  const [sidecart, setSidecart] = useState(cartprops)
  return (
    <div
      className={`w-80 h-screen shadow-md bg-white duration-500 right-0 top-0 fixed z-50 ${
        sidecart ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div
        onClick={() => setSidecart(false)}
        className="absolute nav-hover top-6 cursor-pointer right-8 font-bold text-2xl"
      >
        <AiOutlineClose />
      </div>
    </div>
  );
};

export default Sidebar;
