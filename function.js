
window.function = function (list, keys, items) {
  if (list.value === undefined) return undefined;
  if (keys.value === undefined) return undefined;

  var items = defined items.value ? items.value : list.value.length;
  
  var str_arr = list.value.split(',').splice(0,items);
  var keys_arr = keys.value.split(',');
  var count = 0;
  str_arr.forEach(function (code) {
    if (keys_arr.includes(code)) {
      count++;
    }
  });
  return count;
}
