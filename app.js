var contactList = angular.module('contactList', ['ui.bootstrap']);

contactList.controller('contactListCtrl', function($scope){
    $scope.addCollapsed = true;
    $scope.viewCollapsed = true;
    $scope.editCollapsed = true;
    $scope.deleteCollapsed = true;

    $scope.contacts = [
        {
            name: "Ingrid",
            lastname: "Tartaglia",
            email: "ingrid@me.com",
            phone: "(021) 98765-4321",
            address: ""
        },
        {
            name: "Victor",
            lastname: "Richa",
            email: "victor@me.com",
            phone: "(021) 98765-4321",
            address: ""
        },
    ];
});
