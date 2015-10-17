angular.module('demo', [])
	.directive('demo1', function() {
		return {
			restrict: 'E',
			template: '<div class="watch"></div>',
			replace: true,
			link: function(scope, element, attrs) {
				
				var haha = scope['haha'] = 'haha';
				element.text(haha);

				scope.$watch(scope['haha'], function(x) {
					element.text(x);
				}, true);
				
			}
		}
	})