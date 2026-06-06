const errorMiddleware = (store) => (next) => (action) => {
  if (action.type?.endsWith("/rejected")) {
    console.error("Erreur Redux:", action.error.message);
    alert(`❌ Erreur : ${action.error.message}`);
  }
  return next(action);
};

export default errorMiddleware;
