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

send_attachment = function(event) {
  var fileSelect = event.target

  var files = fileSelect.files;

  var formData = new FormData();

  var file = files[0];

  // Add the file to the request.
  formData.append('game-data', file, file.name);
  $.ajax({
    url: "/restore-backup",
    type: "POST",
    data: formData,
    processData: false,  // tell jQuery not to process the data
    contentType: false,   // tell jQuery not to set contentType
  });
}
