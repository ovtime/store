const loginService = () => {
  // TODO: here call server by fetch

  return new Promise((resolve, reject) => {
    resolve({
      loginStatus: "ok",
      data: { id: "1234", name: "David", userToken: "ABCDEFG1234" },
    });
  });
};

const registerService = () => {
  // TODO: here call server by fetch
  console.log("registered!");
};

export { loginService, registerService };
