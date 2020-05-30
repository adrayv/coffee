export default (...args) =>
  fetch(...args).then(r => {
    return r.json();
  });
