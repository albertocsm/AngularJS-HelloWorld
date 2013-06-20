/// <reference path="../_definitions/angular.d.ts" />


module NameSpace1 {

    export class HomeController {

        //////////////modelo é injectado automaticamnete no construtor do controllador
        constructor($scope) {

            ///////////////////inicializar variavel
            $scope.firstName = "Margarida";
            $scope.lastName = null;


            ///////////////////definir funçao
            $scope.show = function () {

                var last = $scope.lastName == null ? '!!!!!!!' : ('; ' + $scope.lastName);

                alert($scope.firstName + last);
            }

        }
    }
}