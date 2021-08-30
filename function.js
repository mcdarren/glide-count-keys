
window.function = function (list, keys, items) {
  if (list.value === undefined) return undefined;
  if (keys.value === undefined) return undefined;

  var str_arr = list.value.split(',');
  var items = typeof items.value === 'undefined' ? str_arr.length : items.value;
  var codes = str_arr.splice(0,items);
  var keys_arr = keys.value.split(',');
  var count = 0;
  str_arr.forEach(function (code) {
    if (keys_arr.includes(code)) {
      count++;
    }
  });
  return count;
}
