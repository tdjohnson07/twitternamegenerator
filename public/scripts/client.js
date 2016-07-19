angular.module('twitterApp', []);
angular.module('twitterApp').controller('MainController', function($scope, $http){
  $http.get('/getadjs').then(handleAdjSuccess, handleFailure);
  $http.get('/getnouns').then(handleNounSuccess, handleFailure);
  var adj = [];
  var nouns = [];
  $scope.nameslist=[];

  function handleAdjSuccess(response){
    console.log('success', response.data._result.rows)
    adj = response.data._result.rows;
    console.log(adj.length);
    console.log(adj);
  }
  function handleNounSuccess(response){
    console.log('success', response.data._result.rows)
    nouns = response.data._result.rows;
    console.log(nouns);
  }
  function handleFailure(response){
    console.log('failure');
  }

  function randomNumber (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }


  $scope.randomName = function() {
    $scope.nameslist=[];
    for (var i=0; i<10; i++){
      $scope.nameslist.push(adj[randomNumber(0, adj.length)].word + nouns[randomNumber(0, nouns.length)].words);
    }
    console.log($scope.nameslist);
    console.log('running');
  }


});
