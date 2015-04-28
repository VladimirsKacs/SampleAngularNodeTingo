/**
 * Created by Vladimirsk on 4/28/2015.
 */

app.controller('NavigationController', ['loginService', '$scope', function(loginService, $scope)
{
    $scope.user = loginService.getCurrentUser();
    $scope.$watch(
        function() { return loginService.getCurrentUser();},
        function(newVal) { $scope.user = newVal; });
    console.log($scope);
}]);