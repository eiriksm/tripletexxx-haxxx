var body = top.frames.content.document.getElementsByTagName('body');

$(body[0]).find('.contentTable:not(#hourListTable) td').each(function(i, n) {
  var text = $(n).html();
  text = text.replace("\n", '<br>');
  $(n).html(text);
});
