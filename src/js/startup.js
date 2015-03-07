$().ready(function () {
  // debugger;
  var loadAllTemplates = function () {
    $.get('/rest/templates', function (templates) {
      window.CTWTemplates = templates;
    });
  };

  loadAllTemplates();

});