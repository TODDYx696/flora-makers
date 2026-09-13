(function(){
  var src = "data:image/jpeg;base64," + (window.__FLORA_LOGO_P1||"") + (window.__FLORA_LOGO_P2||"");
  document.querySelectorAll('img[src="images/logo.jpg"]').forEach(function(img){ img.src = src; });
})();
