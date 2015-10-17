var sb = {
	name: 'somebody',
	gender: 'male',
	age: 28
} 

angular.module('demo', [])
	.directive('demo1', function()  {
		return {
			restrict: 'E',
			replace: true,
			template: '<div class="demo1"></div>',
			link: function(scope, element, attrs) {
				element.append("<div>name: "+ sb.name +"</div>")
					.append("<div>gender: "+ sb.gender +"</div>")
					.append("<div>age: "+ sb.age +"</div>")
			}
		}
	})