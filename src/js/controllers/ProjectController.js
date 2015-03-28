angular.module("ctw").controller("ProjectController", function($scope, $resource) {
  var response = {
    projectTitle: 'Title',
    projectAuthor: 'Author',
    projectMediaUrl: 'https://placekitten.com/g/200/300',
    participants: ['Developer', 'Creator'],
    categories: ['Lifestyle', 'Social'],
    postedOn: new Date(),
    comments: [
      {
        author: 'Mike',
        text: 'I am curious about this project',
        title: '',
        date: new Date()
      },
      {
        author: 'Nick',
        text: 'i think nothing',
        title: '',
        date: new Date()
      },
      {
        author: 'John',
        text: 'It is wonderful',
        title: '',
        date: new Date()
      }
    ]
  };

  $scope.data = response;
});