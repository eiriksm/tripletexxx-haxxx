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
  $$(doc).off('keydown', '#hourListTable td input', handleKeypress);
  $$(doc).on('keydown', '#hourListTable td input', handleKeypress);
}

function alterDocument(body) {
  $$(body[0]).find('.contentTable:not(#hourListTable) td').each(function(i, n) {
    var text = $$(n).html();
    text = text.replace("\n", '<br>');
    $$(n).html(text);
  });
}

function init(jq, top) {
  $$ = jq;
  body = top.frames.content.document.getElementsByTagName('body');
  doc = top.frames.content.document;
  setInterval(function() {
    doc = top.frames.content.document;
    attachEvents(doc);
  }, 1000);
  alterDocument(body);
}
