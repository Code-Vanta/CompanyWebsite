const Fallback = () => {
  return (
    <div className="flex flex-col px-[4rem] md:px-[0.3rem] sm:px-3 justify-center items-center">
      <p className="text-[1.5rem] text-red-700 font-semibold">Error 404</p>
      <p className="text-[1rem] text-slate-900 font-normal">
        Page Not Found/Resource not yet available
      </p>
    </div>
  );};

export default Fallback;
