'use strict'
app.controller('MainController', function($scope){
   $scope.showHide = function(num){
   		var p = document.getElementsByClassName("more-" + num);
   		if(p[0].innerHTML.toString().trim() == "Още...") p[0].innerHTML = "Скрий";
   		else p[0].innerHTML = "Още...";
   		$scope["more"+num] = !$scope["more"+num];
   }
});