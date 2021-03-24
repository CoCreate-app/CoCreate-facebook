/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["CoCreate"] = factory();
	else
		root["CoCreate"] = root["CoCreate"] || {}, root["CoCreate"]["facebook"] = factory();
})(this, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/CoCreate-facebook.js":
/*!**********************************!*\
  !*** ./src/CoCreate-facebook.js ***!
  \**********************************/
/***/ (() => {

eval("var CoCreateFacebook = {\n  id: 'facebook',\n  actions: ['getUserFeed', 'getUserProfile'],\n  // action_getFacebook: function(element, data) {\n  //     console.log('action gertFacebook');\n  //     let container = document;\t\n  // \tlet form_data = CoCreate.api.getFormData('facebook', 'getFacebook',  container);\n  // \tCoCreate.api.send('facebook', 'getFacebook', form_data);\n  // },\n  render_getUserProfile: function render_getUserProfile(data) {\n    console.log(data);\n  },\n  render_getUserFeed: function render_getUserFeed(data) {\n    console.log(data);\n  }\n};\nCoCreate.api.init({\n  name: CoCreateFacebook.id,\n  module: CoCreateFacebook\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Db0NyZWF0ZS5mYWNlYm9vay8uL3NyYy9Db0NyZWF0ZS1mYWNlYm9vay5qcz84ZDMzIl0sIm5hbWVzIjpbIkNvQ3JlYXRlRmFjZWJvb2siLCJpZCIsImFjdGlvbnMiLCJyZW5kZXJfZ2V0VXNlclByb2ZpbGUiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsInJlbmRlcl9nZXRVc2VyRmVlZCIsIkNvQ3JlYXRlIiwiYXBpIiwiaW5pdCIsIm5hbWUiLCJtb2R1bGUiXSwibWFwcGluZ3MiOiJBQUNBLElBQU1BLGdCQUFnQixHQUFHO0FBQ3hCQyxFQUFBQSxFQUFFLEVBQUUsVUFEb0I7QUFFeEJDLEVBQUFBLE9BQU8sRUFBRSxDQUNSLGFBRFEsRUFFUixnQkFGUSxDQUZlO0FBT3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQyxFQUFBQSxxQkFBcUIsRUFBRSwrQkFBU0MsSUFBVCxFQUFlO0FBQ3JDQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBWjtBQUNBLEdBaEJ1QjtBQWtCeEJHLEVBQUFBLGtCQUFrQixFQUFFLDRCQUFTSCxJQUFULEVBQWU7QUFDbENDLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFaO0FBQ0E7QUFwQnVCLENBQXpCO0FBdUJBSSxRQUFRLENBQUNDLEdBQVQsQ0FBYUMsSUFBYixDQUFrQjtBQUNqQkMsRUFBQUEsSUFBSSxFQUFFWCxnQkFBZ0IsQ0FBQ0MsRUFETjtBQUVqQlcsRUFBQUEsTUFBTSxFQUFFWjtBQUZTLENBQWxCIiwic291cmNlc0NvbnRlbnQiOlsiXG5jb25zdCBDb0NyZWF0ZUZhY2Vib29rID0ge1xuXHRpZDogJ2ZhY2Vib29rJyxcblx0YWN0aW9uczogW1xuXHRcdCdnZXRVc2VyRmVlZCcsXG5cdFx0J2dldFVzZXJQcm9maWxlJ1xuXHRdLFxuXHRcblx0Ly8gYWN0aW9uX2dldEZhY2Vib29rOiBmdW5jdGlvbihlbGVtZW50LCBkYXRhKSB7XG5cdC8vICAgICBjb25zb2xlLmxvZygnYWN0aW9uIGdlcnRGYWNlYm9vaycpO1xuXHQvLyAgICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50O1x0XG5cdC8vIFx0bGV0IGZvcm1fZGF0YSA9IENvQ3JlYXRlQXBpLmdldEZvcm1EYXRhKCdmYWNlYm9vaycsICdnZXRGYWNlYm9vaycsICBjb250YWluZXIpO1xuXHQvLyBcdENvQ3JlYXRlQXBpLnNlbmQoJ2ZhY2Vib29rJywgJ2dldEZhY2Vib29rJywgZm9ybV9kYXRhKTtcblx0Ly8gfSxcblx0XG5cdHJlbmRlcl9nZXRVc2VyUHJvZmlsZTogZnVuY3Rpb24oZGF0YSkge1xuXHRcdGNvbnNvbGUubG9nKGRhdGEpXG5cdH0sXG5cdFxuXHRyZW5kZXJfZ2V0VXNlckZlZWQ6IGZ1bmN0aW9uKGRhdGEpIHtcblx0XHRjb25zb2xlLmxvZyhkYXRhKVxuXHR9XG59O1xuXG5Db0NyZWF0ZS5hcGkuaW5pdCh7XG5cdG5hbWU6IENvQ3JlYXRlRmFjZWJvb2suaWQsIFxuXHRtb2R1bGU6XHRDb0NyZWF0ZUZhY2Vib29rLFxufSk7Il0sImZpbGUiOiIuL3NyYy9Db0NyZWF0ZS1mYWNlYm9vay5qcy5qcyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/CoCreate-facebook.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/CoCreate-facebook.js"]();
/******/ 	__webpack_exports__ = __webpack_exports__.default;
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});