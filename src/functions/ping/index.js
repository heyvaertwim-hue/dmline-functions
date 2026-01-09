module.exports = async function (context, req) {
  context.res = {
    status: 200,
    body: {
      status: "pong",
      function: "ping",
      source: "GitHub"
    }
  };
};
