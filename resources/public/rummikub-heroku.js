bind_variable = function(klass, k) {
  var value = document.getElementById(k).value;
  if (!value || value == "") {
    throw new Error(k + ' not defined in ' + klass)
  }
  try {
    rummikub_cljs[klass][k] = reagent.core.atom(cljs.reader.read_string(value))
    rummikub_cljs[klass][k + '_original'] = reagent.core.atom(cljs.reader.read_string(value))
  } catch(err) {
    console.log(klass + ' ' + k)
    throw err
  }
}
