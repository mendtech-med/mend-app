const Header = () => {
  const given_name = localStorage.getItem("given_name")
  return (
    <header className="w-full flex items-center bg-white px-8 py-4">
      <h1 className="text-xl font-medium capitalize">Hello {given_name}</h1>
    </header>
  );
};

export default Header;
