

import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const router = useRouter();
  
  return (
    <div className="overflow-hidden mx-auto max-w-5xl flex-col align-center justify-center py-8 px-5 xl:px-0 ">
      {children}
    </div>
  );
};

export default Layout;
