angular.module('legacyOwls.latest', [])
.controller('latest', ['$scope', 'Articles', function($scope, Articles) {

  $scope.options = Articles.options;
  $scope.selectedOption = 'all';

  $scope.getLatest = function() {
    var params = {
      source: 'all',
      section: $scope.selectedOption,
      time: '24',
      limit: 40,
      offset: 0
    }

    Articles.getLatest(params)
    .then(function(response) {
      $scope.photos = response.data.results.filter(function(photo) {
        photo.multimedia.length === 4;
      });
      console.log($scope.photos);
    });

  }

  // Get the latest news items
  $scope.getLatest();

  // Look for newest news every 5 minutes
  setInterval($scope.getLatest, 5*60000); 

}]);