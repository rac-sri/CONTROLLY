import {logError} from "../helpers/log";

const tryCatch = (handler) => {
  return async (req, res, next) => {
    try {
      await handler(req, res);
    } catch (ex) {
      logError(ex);
      next(ex);
    }
  };
};

export default tryCatch;
