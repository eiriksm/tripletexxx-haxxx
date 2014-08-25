module.exports = init;
var $$, body;

function handleKeypress(e) {
  if (e.keyCode === 9) {
    $$(this).closest('tr').next().find('textarea').focus();
    e.preventDefault();
    return false;
  }
}

function attachEvents(body) {
  console.log($$);
  $$(body[0]).find('#hourListTable td input').keydown(handleKeypress);
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
  console.log(body);
  attachEvents(body);
  alterDocument(body);
}
