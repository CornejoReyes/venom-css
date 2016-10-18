
var venomSidenav = (function() {

  var elements = [];
  var elementsConfig = {};

  function merger(oldConfig, newConfig) {
    var mergedConfig = {};
    for (var attr in oldConfig) {
      mergedConfig[attr] = oldConfig[attr];
    }
    for (var attr in newConfig) {
      mergedConfig[attr] = newConfig[attr];
    }
    return mergedConfig;
  }

  function element(elem, config) {

    if (typeof elem == 'string') {
      if (elements.indexOf(elem) == -1)
      elements.push(elem);
      elementsConfig[elem] = null;
    }

    function sidenav() {
      return {
        open: function() {
          this.isOpen = true;
          this.element.classList.add("venomOpenSidenav");
        },
        close: function() {
          this.isOpen = false;
          this.element.classList.remove("venomOpenSidenav");
        },
        openSpeed: 300,
        isOpen: false
      };
    }

    if (elementsConfig[elem] === null) {
      elementsConfig[elem] = sidenav();
      elementsConfig[elem].element = document.getElementById(elem);
      elementsConfig[elem].element.classList.add("venomSidenav");
    }

    if (typeof config === 'object') {
      elementsConfig[elem] = merger(elementsConfig[elem], config);
    }

    console.log(elementsConfig);

    return elementsConfig[elem];
  }

  return element;
})();

var venom = {
  sidenav: venomSidenav
}
