if (location.pathname.match(/\.html$/i)) {
  var newPath = location.pathname.replace(/\.html$/i, '');
  history.replaceState(null, null, newPath);
}
