const Loading = () => {
  return (
    <div className="flex flex-row gap-2 justify-center items-center">
        <div className="w-4 h-4 rounded-full  bg-milky-brown animate-bounce"></div>
        <div
          className="w-4 h-4 rounded-full  bg-light-brown animate-bounce [animation-delay:-.3s]"
        ></div>
        <div
          className="w-4 h-4 rounded-full bg-dark-brown animate-bounce [animation-delay:-.5s]"
        ></div>
      </div>
  );
};


export default Loading;