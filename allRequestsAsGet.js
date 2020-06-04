// middleware https://github.com/typicode/json-server/issues/453#issuecomment-343048811
module.exports = function (req, res, next) {
  if (req.method !== "GET") {
    // Converts all requests to GET and moves payload to query params
    // JSON server becomes immutable
    req.method = "GET";
    req.query = req.body;
  }
  // Continue to JSON Server router
  next();
};
