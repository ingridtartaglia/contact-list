var contactList = angular.module('contactList', ['ui.bootstrap', 'firebase']);

contactList.controller('contactListCtrl', function($scope, $firebaseArray){
    var url = "https://daychallenge18.firebaseio.com/contacts";
    var firebase = new Firebase(url);

    $scope.contacts = $firebaseArray(firebase);

    $scope.addCollapsed = true;
    $scope.viewCollapsed = true;
    $scope.editCollapsed = true;
    $scope.deleteCollapsed = true;

    $scope.save = function(contact){
        $scope.contacts.$add(contact);
        $scope.contact = {};
    }

    $scope.edit = function(contact){
        $scope.contacts.$save(contact);
    }

    $scope.delete = function(contact){
        $scope.contacts.$remove(contact);
    }
});
