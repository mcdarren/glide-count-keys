
window.function = function (list, keys, items) {
  if (list.value === undefined) return undefined;
  if (keys.value === undefined) return undefined;
  if (items.value === undefined) return undefined;

  var items = items.value;
  var str_arr = list.value.split(',');
  var codes = str_arr.slice(0,items);
  var keys_arr = keys.value.split(',');
  var count = 0;
  codes.forEach(function (code) {
    if (keys_arr.includes(code)) {
      count++;
    }
  });
  return count;
}
