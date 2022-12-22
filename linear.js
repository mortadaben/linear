function linear(arr1, arr2) {
  var objOne = {};
  var sum = 0;
  for (let i = 0; i < arr1.length; i++) {
    let found = false;
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] == arr2[j]) {
        found = true;
        break;
      }
    }
    if (!found) {
      sum += arr1[i];
    }
  }
  for (let i = 0; i < arr2.length; i++) {
    let found = false;
    for (let j = 0; j < arr1.length; j++) {
      if (arr2[i] == arr1[j]) {
        found = true;
        break;
      }
    }
    if (!found) {
      sum += arr2[i];
    }
  }
}
