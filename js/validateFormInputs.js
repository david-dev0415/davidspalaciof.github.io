function lettersOnly (event) {
  var charCode = event.keyCode;

  if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123) || charCode == 8)
    return true;
  else
    return false;
}