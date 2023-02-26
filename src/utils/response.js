const getResponse = function (error, data, ok, estatus, msg) {
  let res = { error: error, data: data, ok: ok, status: estatus, message: msg };
  console.log("Generate response " + JSON.stringify(res));
  return res;
};

module.exports = { getResponse };
