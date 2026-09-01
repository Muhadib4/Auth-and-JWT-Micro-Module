function checkApi(req, res) {
  res.status(200).json({
    message: "Auth & JWT Micro-Module API is running"
  });
}

function echoData(req, res) {
  res.status(200).json({
    message: "JSON berhasil diterima",
    receivedData: req.body
  });
}

module.exports = { checkApi, echoData };
