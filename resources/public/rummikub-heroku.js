revert = function() {
  $('.revertable').each(function(i, element) {
    $(element).val($(element).attr('original_value'))
    console.log(element)
  })
}

logout = function() {
  var module = document.location.pathname.substr(1);
  var exec = 'octant_cljs.' + module + '.logout()';
  eval(exec)
}

identity = function(x) {return x}

frac = function(n) {
  var s = n.toString().split("\.")[1];
  if (!s) {return 0}
  var n = Number(s)
  return n / Math.pow(10, s.length)
};

add_attachment = function(fileSelect) {
  var files = fileSelect.files;

  var formData = new FormData();

  var file = files[0];

  // Add the file to the request.
  formData.append('pdf', file, file.name);
  return formData
}
send_attachment = function(id, i, element, handler) {
  var formData = add_attachment(element)
  formData.append("i", i)
  formData.append("id", id)
  $.ajax({
    url: "/set-report-manual",
    type: "POST",
    data: formData,
    processData: false,  // tell jQuery not to process the data
    contentType: false,   // tell jQuery not to set contentType
    success: handler
  });
}
send_attachment2 = function(country, company, element, handler) {
  var formData = add_attachment(element)
  formData.append("country", country)
  formData.append("company", company)
  $.ajax({
    url: "/add-report",
    type: "POST",
    data: formData,
    processData: false,  // tell jQuery not to process the data
    contentType: false,   // tell jQuery not to set contentType
    success: handler
  });
}

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

clone = function(oldObject) {
  return jQuery.extend(true, {}, oldObject);
}
