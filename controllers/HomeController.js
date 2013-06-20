var NameSpace1;
(function (NameSpace1) {
    var HomeController = (function () {
        function HomeController($scope) {
            $scope.firstName = "Margarida";
            $scope.lastName = null;
            $scope.show = function () {
                var last = $scope.lastName == null ? '!!!!!!!' : ('; ' + $scope.lastName);
                alert($scope.firstName + last);
            };
        }
        return HomeController;
    })();
    NameSpace1.HomeController = HomeController;    
})(NameSpace1 || (NameSpace1 = {}));
//@ sourceMappingURL=HomeController.js.map
