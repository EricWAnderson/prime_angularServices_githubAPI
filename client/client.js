/**
 * Created by ericanderson on 1/17/16.
 */
var app = angular.module("myApp", []);

app.controller('myController', ['$scope', 'GitHubService', function($scope, GitHubService){
    GitHubService.makeCall();
    $scope.github = GitHubService.data;
    console.log('the data is', $scope.github);
}]);

app.factory('GitHubService', ['$http', function($http){
    var data = {};

    var gitHubUsername = 'EricWAnderson';

    var makeCall = function(){
        $http.jsonp('https://api.github.com/users/' + gitHubUsername + '/events?callback=JSON_CALLBACK').then(function(response){
            data.results = response.data.data;
            console.log(data.results);
        });
    }

    return {
        makeCall: makeCall,
        data: data
    }

}]);