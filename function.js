
window.function = function (list, keys, items) {
  if (list.value === undefined) return undefined;
  if (keys.value === undefined) return undefined;

  var num_items;
  var str_arr = list.value.split(',');
  if (items.value === undefined) {
    num_items = str_arr.length;
  }
  else {
    num_items = items.value;
  }
  var codes = str_arr.slice(0,num_items);
  var keys_arr = keys.value.split(',');
  var count = 0;
  codes.forEach(function (code) {
    if (keys_arr.includes(code)) {
      count++;
    }
  });
  return count;
}
