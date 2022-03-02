const asyncTest = require('./asyncTest');

test('call back pass', () => {
  asyncTest.callback(true).then((result) => {
    expect(result).toBeTruthy();
  });
});

test('call back fail', () => {
  asyncTest.callback(false).then((result) => {
    expect(result).toBeFalsy();
  });
});

test('the fetch will pass', async () => {
  await expect(asyncTest.myPromise(0)).resolves.toMatch('OK');
});

test('the fetch will reject', async () => {
  await expect(asyncTest.myPromise(10)).rejects.toMatch('Error');
});
