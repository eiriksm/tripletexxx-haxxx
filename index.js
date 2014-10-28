module.exports = init;
var $$, body, doc;

function handleKeypress(e) {
  if (e.keyCode === 9) {
    $$(this).closest('tr').next().find('textarea').focus();
    e.preventDefault();
    return false;
  }
}

function attachEvents(doc) {
  $$(doc).off('keydown', '#ajaxContenthourListTable td input', handleKeypress);
  $$(doc).on('keydown', '#ajaxContenthourListTable td input', handleKeypress);
}

function alterDocument(body) {
  $$(body[0]).find('.contentTable:not(#ajaxContenthourListTable) td').each(function(i, n) {
    var text = $$(n).html();
    text = text.replace("\n", '<br>');
    $$(n).html(text);
  });
}

function init(jq, win) {
  $$ = jq;
  doc = win.document;
  body = doc.getElementsByTagName('body');
  setInterval(function() {
    doc = win.document;
    attachEvents(doc);
  }, 1000);
  alterDocument(body);
  win.fixit = function() {
    var $ = jq;
    $(body).find('.tlx-icon-delete-row').each(function(i,n) {
      var $tr = $(this).closest('tr');
      var skip = false;
      $tr.find('input.hours').each(function(j,m) {
        if ($(m).val().length > 0) {
          skip=true;
        }
      });
      if (!skip) {
        $(this).click();
      }
    });
  };
}
