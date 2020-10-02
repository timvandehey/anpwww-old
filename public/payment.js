$(document).ready(function() {
    $('.firstFocus').focus().select();
    $('#docNumber').autoNumeric({aSep:'',mDec: 0, mNum:20});
    $('#amt').autoNumeric({aSign: '$ ', mRound: 'D', mNum:5 });
    $('input:text').bind("keydown",function(e) {
      var key=e.keyCode || e.which;
      if ( key === 13 ) {
         $(this).change();
         $(this).moveNext();
         return false;
      };
      return true;
   });
    $('#myform').validate({
  rules: {
    amt: "required",
    docNumber: "required"
  },
  messages: {
    amt: {required: " * REQUIRED * "},
    docNumber: {required: " * REQUIRED * "}
  },
    errorElement: "span",
    wrapper: "span",  // a wrapper around the error message
    submitHandler: function(form) {
        $('#item_name').val("Document # " + $('#docNumber').val());
        $('#amount').val($('#amt').val());
       form.submit();
    }
});
    var logo = $('#logo');
    logo.load(function() {
        // Remove attributes in case img-element has set width and height
        $(this).removeAttr("width")
           .removeAttr("height")
           .css({ width: "", height: "" }); // Remove css dimensions as well
        $('#instructions').width(this.width);
        $('#contents').width(this.width);
    });
    var src = logo.src;
    logo.src = "";
    logo.src = src; // Triggers onload if image is cached (see comments)
});