
window.function = function (list, keys) {
  if (list.value === undefined) return undefined;
  if (keys.value === undefined) return undefined;
  
  var str_arr = list.split(',');
  var keys_arr = keys.split(',');
  var count = 0;
  str_arr.forEach(function (code) {
    if (keys_arr.includes(code)) {
      count++;
    }
  });
  return count;

}
