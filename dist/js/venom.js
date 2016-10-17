var venom = (function () {

  var elements = [];
  var elementsConfig = {};

  function element(elem) {

    if (typeof elem == 'string') {
      if (elements.indexOf(elem) == -1)
      elements.push(elem);
      elementsConfig[elem] = null;
    }

    function venomSidenav(config) {

      var sidenav = {
        open: function() {
          this.isOpen = true;
          this.element.classList.add("venomOpenSidenav");
        },
        close: function() {
          this.isOpen = false;
          this.element.classList.remove("venomOpenSidenav");
        },
        isOpen: false
      }

      if (elementsConfig[elem] === null) {
        elementsConfig[elem] = sidenav;
        elementsConfig[elem].element = document.getElementById(elem);
        elementsConfig[elem].element.classList.add("venomSidenav");
      }

      if (typeof config === 'object') {
        //elementsConfig[elem] = config;
        //console.log(elementsConfig);
      }

      console.log(elementsConfig);
      //console.log(elementsConfig[elem]);



      return elementsConfig[elem];
    }

    return {
      sidenav: venomSidenav
    };
  }

  return element;

})();
