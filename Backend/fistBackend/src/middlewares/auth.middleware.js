export const sampaleMiddleWare = async (req, resizeBy, next) => {
  console.log("I am Sample Middleware 1");
  next();
};

export const sampaleMiddleWare2 = async (req, resizeBy, next) => {
  console.log("I am sample Middleware 2");
  next();
};
