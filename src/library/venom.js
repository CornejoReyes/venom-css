
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
          this.element.classList.add("sidenav-open");
        },
        close: function() {
          this.isOpen = false;
          this.element.classList.remove("sidenav-open");
        },
        openSpeed: 0.5,
        isOpen: false
      };
    }

    if (elementsConfig[elem] === null) {
      elementsConfig[elem] = sidenav();
      elementsConfig[elem].element = document.getElementById(elem);
      elementsConfig[elem].element.classList.add("sidenav");
    }

    if (typeof config === 'object') {
      elementsConfig[elem] = merger(elementsConfig[elem], config);
    }

    if (typeof elementsConfig[elem].openSpeed !== 'undefined') {
      elementsConfig[elem].element.style.animationDuration = elementsConfig[elem].openSpeed + "s";
    }

    console.log(elementsConfig[elem]);

    return elementsConfig[elem];
  }

  return element;
})();

var venom = {
  sidenav: venomSidenav
}
