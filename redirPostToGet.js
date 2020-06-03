// middleware https://github.com/typicode/json-server/issues/453#issuecomment-343048811
module.exports = function (req, res, next) {
  console.log("middle");
  if (req.method === "POST") {
    console.log("called");
    // Converts POST to GET and move payload to query params
    // This way it will make JSON Server that it's GET request
    req.method = "GET";
    req.query = req.body;
  }
  // Continue to JSON Server router
  next();
};
