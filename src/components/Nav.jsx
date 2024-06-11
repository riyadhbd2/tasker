const Nav = () => {
  return (
    <nav className="md:py-8 fixed top-0 !bg-[#191D26] w-full z-50">
      <div className="container mx-auto flex items-center justify-between gap-x-6">
        {/* <!-- Logo --> */}
        <a href="/">
          {/* <img className="h-[45px] text-white" src="./assets/lws-logo-en.svg" alt="Lws" /> */}
          <h1 className="text-white text-2xl">Learn With Arafat</h1>
        </a>
        {/* <!-- Logo Ends --> */}
      </div>
    </nav>
  );
};

export default Nav;
