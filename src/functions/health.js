module.exports = async function (context, req) {
  context.res = {
    status: 200,
    body: {
      status: "OK",
      source: "GitHub",
      timestamp: new Date().toISOString()
    }
  };
};
