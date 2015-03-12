$().ready(function () {
  var projectId = 'someprojectId';

  var loadAllTemplates = function () {
    $.get('/rest/templates', function (templates) {
      window.CTWTemplates = templates;
      $.ajax('/rest/projects/' + projectId, function (projectResponse) {
        var projectHeaderFn = doT.template(window.CTWTemplates['project/projectHeader']);
        var projectHeader = projectHeaderFn(projectResponse);
        $('.project_header').append(projectHeader);
      });

    });
  };

  loadAllTemplates();




});