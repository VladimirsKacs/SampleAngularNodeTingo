/**
 * Created by Vladimirsk on 4/27/2015.
 */
(function()
{
    app.controller('phoneBookController', ['$http', '$modal', '$rootScope', function($http,$modal,$scope)
    {
        //intit
        if(!$scope.sessionKey)
            $location.path("/login");
        this.contacts;
        var that=this;
        $http.post('/API/getContacts',{key:$scope.sessionKey}).success(function(resData)
            {
                if(!resData.err) {
                    that.contacts = resData;
                }
                else
                    alert(resData.err);// handle error.
            }
        );
        //end init

        this.setToEdit= function(id)
        {
            var modalInstance = $modal.open({
                templateUrl: 'Angulars/views/editor.jsp',
                controller: 'editorController',
                resolve: {
                    contact: function () {
                        return that.contacts[id];
                    },
                    save: function () {
                        return that.saveContact;
                    },
                    restore: function() {
                        var reserveCopy=angular.copy(that.contacts[id]);
                        return function () {
                            that.contacts[id]=reserveCopy;
                        }
                    }
                }
            });
        }

        this.addNew= function()
        {
            var newCon={first:"",last:"",phone:null};
            that.contacts.push(newCon);
            var modalInstance = $modal.open({
                templateUrl: 'Angulars/views/editor.jsp',
                controller: 'editorController',
                resolve: {
                    contact: function () {
                        return newCon;
                    },
                    save: function () {
                        return that.insertContact;
                    },
                    restore: function() {
                        return function () {
                            that.contacts.pop();
                        }
                    }
                }
            });
        }

        this.saveContact= function(contact)
        {
            contact.key=$scope.sessionKey;
            $http.post('/API/saveContact', contact).success(function(resData)
                {
                }
            );
        }

        this.insertContact= function(contact)
        {
            contact.key=$scope.sessionKey;
            $http.post('/API/insertContact', contact).success(function(resData)
                {
                }
            );
        }
    }
    ]);

    app.controller('editorController', function ($scope, $modalInstance, contact, save, restore) {


        $scope.contact = contact;

        $scope.ok = function () {
            save(contact);
            $modalInstance.close();
        };

        $scope.cancel = function () {
            restore();
            $modalInstance.dismiss('cancel');
        };
    });


    app.controller('loginController', ['$rootScope','$http', "loginService", '$location', function($scope,$http, loginService, $location) {
        this.userName="";
        this.password="";
        var that= this;
        this.logOn= function()
        {
            $http.post('API/Login', {login:that.userName,password:that.password}).success(function(resData)
                {
                    if(!resData.err) {
                        loginService.setCurrentUserName(that.userName);
                        $scope.sessionKey = resData.key;
                        alert("Success!");
                        $location.path("/addressBook");
                    }
                    else
                        alert(resData.err);
                }
            );

        }
    }]);

    app.controller('logoutController', ['$rootScope','$http', 'loginService', function($scope,$http,loginService) {
            $http.post('API/Logout', {key:$scope.sessionKey})
            loginService.setCurrentUser({});
            $scope.sessionkey=null;
    }]);
}
)();