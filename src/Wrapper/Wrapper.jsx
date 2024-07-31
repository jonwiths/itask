const Wrapper = ({ children }) => {
  return (
    <section className="w-screen p-4 dark:bg-darkBlue dark:text-white text-darkBlue bg-white h-screen min-h-min">
      {children}
    </section>
  );
};

export default Wrapper;
