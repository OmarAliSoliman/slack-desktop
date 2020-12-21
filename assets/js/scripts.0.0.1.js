/*****************************************************/
/*** custom script for this project ***/
/*****************************************************/


$(function () {
  $('.prog-sidebar ').slimScroll({
    height: '100vh',
    position: 'left'
  });
});


$(function () {
  $('.big-modal .modal-content ').slimScroll({
    height: '100vh'
  });
});

$(function () {
  $('#sideModal .modal-content ').slimScroll({
    height: '100vh'
  });
});

$(function () {
  $('nav#sidebar').slimScroll({
    height: '100vh'
  });
});


$(function () {
  $('.modal.left').slimScroll({
    height: '100vh'
  });
});






$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});




$(function () {
  $('.chat-body').slimScroll({
    height: '85vh',
    start: 'bottom',

  });
});


$("select").select2({
    minimumResultsForSearch: Infinity
});



$(document).ready(function(){
    $(".js-example-basic-multiple").change(function(){
        var selectedMention = $(this).children("option:selected").val();
        $(".message-box").focus();
    });
});

$(document).ready(function () {
  $('.collapse.in').prev('.panel-heading').addClass('active');
  $('#accordion, #bs-collapse')
    .on('show.bs.collapse', function (a) {
      $(a.target).prev('.panel-heading').addClass('active');
    })
    .on('hide.bs.collapse', function (a) {
      $(a.target).prev('.panel-heading').removeClass('active');
    });
});

$("#open_btn").click(function () {
  $.FileDialog({
    multiple: true
  }).on('files.bs.filedialog', function (ev) {
    var files = ev.files;
    var text = "";
    files.forEach(function (f) {
      text += f.name + "<br/>";
    });
    $("#output").html(text);
  }).on('cancel.bs.filedialog', function (ev) {
    $("#output").html("Cancelled!");
  });
});

$(document).ready(function() {
    $("#emojionearea5").emojioneArea({
      filtersPosition: "bottom",
      tones: true,
      autocomplete: true,
      inline: true,
      pickerPosition: "top",
    });
  });
/*
$("#emojionearea5").emojioneArea({
  container: "textarea",
  hideSource: false,
  filtersPosition: "bottom",
  tones: false,
  autocomplete: true,
  inline: true,
  pickerPosition: "top",
});
/*
$("#emojionearea6").emojioneArea({
  filtersPosition: "bottom",
  tones: false,
  autocomplete: true,
  inline: true,
  pickerPosition: "right",
});*/

$(document).ready(function() {
  $("#standalone").emojioneArea({
    standalone: true,
    pickerPosition: "bottom",
    emojiPlaceholder: ":star_struck:"
  });
});

function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
      $('#imagePreview').css('background-image', 'url(' + e.target.result + ')');
      $('#imagePreview').hide();
      $('#imagePreview').fadeIn(650);
    }
    reader.readAsDataURL(input.files[0]);
  }
}
$("#imageUpload").change(function () {
  readURL(this);
});


$(document).ready(function () {
  $('.message-box').keydown(function (e) {
    if (e.which == 13) {
      e.preventDefault();
      $.ajax({
        type: 'POST',
        // dataType : 'html',
        url: "{{ route('sendMessage', \request()->get('g')) }}",
        data: $('form#chat').serialize(),
      }).done(function (data) {
        var jsonData = $.parseJSON(data);
        $('input.message-box').val('');
        if (jsonData.success === 'success') {
          key = jsonData.messageKey;
          // firebase.database().ref('/group_1/messages/'+key).on('value', function (results) {
          //     var message = results.val();
          //     // results.forEach(function (message) {
          //     //     console.log(message.child(key));
          //     // })
          //     console.log(message);
          // });
        }
      });
    }
  });




  // $("#message-box").on('click', function (e) {
  //
  // });
});


$(document).ready(function () {
  $('.sidebarCollapse').on('click', function () {
    $('#sidebar').toggleClass('active');
    $("#content").toggleClass('active');
    $("#ChatTextArea").toggleClass('active');
    $(".fixed-date").toggleClass('fixed-date-position');
  });

  $('#mentionSelected').on('change.select2', function() {
    if($(this).val() != null ){
      $('.mentionSelected-container').addClass('active')
    }else{
      $('.mentionSelected-container').removeClass('active')
    }
  })

});


/*
$(document).ready(function () {
  $('.modal-collapse').on('click', function () {
    $('.modal.left .modal-dialog').toggleClass('active');
    $("#content").toggleClass('active');
    $("#ChatTextArea").toggleClass('active');
  });
}); */
