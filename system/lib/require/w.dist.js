/*! 
* WeX5 v3 (http://www.justep.com) 
* Copyright 2015 Justep, Inc.
* Licensed under Apache License, Version 2.0 (http://www.apache.org/licenses/LICENSE-2.0) 
*/ 
//TODO for dist tools
define(function() {

  //main api object
  var wAPI = {};
  


  wAPI.normalize = function(name, normalize) {
	  return normalize(name);
  }
  
  
  wAPI.load = function(cssId, req, load, config) {
	  load();
  }

  return wAPI;
});
