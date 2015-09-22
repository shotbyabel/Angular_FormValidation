var app = angular.module('minmax', [

                                    'jcs-autoValidate']

                                    );

//custom error messages for our form validation
app.run(function (defaultErrorMessageResolver) {
    defaultErrorMessageResolver.getErrorMessages().then(function (errorMessages) {
      errorMessages['tooYoung'] = 'You must be at least {0} years old to use this site';
      errorMessages['tooOld'] = 'You must be max {0} years old to use this site';
      errorMessages['badUsername'] = 'Username can only contain numbers and letters and _';
    });
  }
);

//create ng-controller                       //inject the http service here
app.controller('MinMaxControl', function($scope, $http) {
                          // minmax is the ng-controller from our index.html

//anything we add to scope variable we can data bind to in the html
  $scope.formModel = {};

$scope.onSubmit = function () { //$scope variable gives us access to the html
 


    console.log("Hey i'm submitted!");
    console.log($scope.formModel);// can print out the formModel objects


   // SENDING an http request                                //data we want to SEND --> POST
    $http.post('https://minmax-server.herokuapp.com/register/', $scope.formModel).
      success(function (data) {    //success handler            //pass form data
        console.log("BooYa!")
      }).error(function (data) { //error handler
        console.log("oh No")
      });

 
 
    };
 });

