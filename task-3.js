const findBestEmployee = function (employees) {
  const keys = Object.keys(employees);
  let max = 0;
  console.log(keys);
  for (key of keys) {
    // console.log(employees[key]);
    if (max < employees[key]) {
      max = employees[key];
      name = key;
    }
  }
  return name;
};

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  })
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  })
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  })
); // lux
