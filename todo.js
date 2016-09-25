var app=angular.module("todo",[]);
	app.controller("todoCtrl",function($scope){
		$scope.delx=false;
		$scope.notes=["sleep"];
		$scope.add=function(){
			//push into the note array
			$scope.err="";
			if($scope.note&&$scope.notes.indexOf($scope.note)==-1)
			$scope.notes.push($scope.note);
			else
				$scope.err="Empty or Ducplicate entry ... Please try again ";
		};
		$scope.del=function(x){
			//del from note based on index
			$scope.notes.splice(x,1);	
			$scope.delx=false;

		};
		$scope.changex=function(){
			$scope.delx=!$scope.delx;
		};
	});