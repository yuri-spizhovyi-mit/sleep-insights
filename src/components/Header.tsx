function Header() {
  return (
    <div className=" py-3 px-4  fixed top-0 w-full bg-gradient-to-r from-indigo-900 via-purple-800 to-indigo-900 shadow-md z-30 flex gap-2 items-center">
      <img
        src="./hero-img.webp"
        alt="Hero avatar"
        className="w-7 rounded-full block"
      />
      <a
        href="https://github.com/yuri-spizhovyi-mit"
        target="_blank"
        rel="noopener noreferrer"
        className="font-semibold text-sm md:text-lg bg-gradient-to-r from-pink-400 via-purple-300 to-indigo-400 bg-clip-text text-transparent hover:from-pink-500 hover:via-purple-400 hover:to-indigo-500 transition duration-300"
      >
        Developed by Yuri Spizhovyi
      </a>
    </div>
  );
}

export default Header;
