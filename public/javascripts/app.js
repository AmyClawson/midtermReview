angular.module('vote', [])
.controller('MainCtrl', [
  '$scope',
  function($scope){
    $scope.test = 'Hello world!';
    $scope.candidates = [
      {name:'Amy',votes: 0 },
      {name:'Tanton',votes:5}
    ];
  }
]);
