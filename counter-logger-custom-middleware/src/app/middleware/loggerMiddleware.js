function LoggerMiddleware({dispatch,getState}) {
  return (next) => {
    return (action) => {
      console.log("Previous State : ", getState());
      console.log("Action : ", action);
      next(action);
      console.log("Next State : ", getState());
      console.log("---------------------------");
    };
  };
}

export default LoggerMiddleware;
