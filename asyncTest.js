var callback = async (input) => {
  let data = await checkData(input);
  return data;
};

var checkData = (data) => {
  if (data === true) return true;
  else return false;
};

var myPromise = (x) => {
  return new Promise(function (myResolve, myReject) {
    // The producing code (this may take some time)

    if (x == 0) {
      myResolve('OK');
    } else {
      myReject('Error');
    }
  });
};

module.exports = {
  callback: callback,
  myPromise: myPromise,
};
