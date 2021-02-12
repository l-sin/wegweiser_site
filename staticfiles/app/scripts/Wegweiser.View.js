'use strict';

Wegweiser.prototype.initDialog = function() {
	var filter_display = document.querySelector('#filter-display');
	const dialog = new mdc.dialog.MDCDialog(document.querySelector("#filter-dialog"));
	var cancel_button = document.querySelector('#cancel-button');
	var filter_button = document.querySelector('#filter-button');
	var that = this;

	cancel_button.addEventListener("click", function(){
		dialog.close();
	});

	filter_display.addEventListener("click", function(){
		dialog.open();
	});
};


Wegweiser.prototype.initFooter = function() {
	
  var footerEl = document.querySelector('.footer');
  var that = this;
  
  const dialog = new mdc.dialog.MDCDialog(document.querySelector("#footer-dialog"));
  var close_button = document.querySelector('#close-button');
  close_button.addEventListener("click", function(){
	//document.querySelector("#footer-dialog-content").innerHTML="";
	dialog.close();
  });
  var about = document.querySelector('#about');
  about.addEventListener("click", function() {
	  document.querySelector("#footer-dialog-title").innerHTML = 'About';
	  document.querySelector("#footer-dialog-content").innerHTML = that.data['about'];
	  dialog.open();
  } );
  var contact = document.querySelector('#contact');
  contact.addEventListener("click", function() {
	  document.querySelector("#footer-dialog-title").innerHTML = 'Contact';
	  document.querySelector("#footer-dialog-content").innerHTML = that.data['contact'];
	  dialog.open();
  } );
  var conditions = document.querySelector('#conditions');
  conditions.addEventListener("click", function() {
	  document.querySelector("#footer-dialog-title").innerHTML = 'Terms & Conditions';
	  document.querySelector("#footer-dialog-content").innerHTML = that.data['conditions'];
	  dialog.open();
  } );
};


/*
Wegweiser.prototype.filterRoutesByPref = function(route,preferences) {
	var goodRoute = route.type==preferences.Type &&
					route.time_to_start<=preferences.MaxTravelTime &&
					route.time_from_end<=preferences.MaxTravelTime;
					  
	return goodRoute
}

Wegweiser.prototype.filterRoutesByWeather = function(route) {
	var goodWeather = (route.start_weather['status']=='Clear' || route.start_weather['status']=='Clouds')&&
					  (route.end_weather['status']=='Clear' || route.end_weather['status']=='Clouds');
					  
	return goodWeather
}

Wegweiser.prototype.formatTimeToHM = function(timeNum) {
	var mins = timeNum%1;
	var timeString = {'hours': Math.floor(timeNum), 'minutes': Math.round(mins*60)};
					  
	return timeString
}
*/

/*
Wegweiser.prototype.renderTemplate = function(id, data) {
  var template = this.templates[id];
  var el = template.cloneNode(true);
  el.removeAttribute('hidden');
  this.render(el, data);
  
  // set an id in case we need to access the element later
  if (data && data['.id']) {
    // for `querySelector` to work, ids must start with a string
    el.id = this.ID_CONSTANT + data['.id'];
  }

  return el;
};
*/
/*
Wegweiser.prototype.render = function(el, data) {
  if (!data) {
    return;
  }

  var that = this;
  var modifiers = {
    'data-fir-foreach': function(tel) {
      var field = tel.getAttribute('data-fir-foreach');
      var values = that.getDeepItem(data, field);

      values.forEach(function (value, index) {
        var cloneTel = tel.cloneNode(true);
        tel.parentNode.append(cloneTel);

        Object.keys(modifiers).forEach(function(selector) {
          var children = Array.prototype.slice.call(
            cloneTel.querySelectorAll('[' + selector + ']')
          );
          children.push(cloneTel);
          children.forEach(function(childEl) {
            var currentVal = childEl.getAttribute(selector);

            if (!currentVal) {
              return;
            }

            childEl.setAttribute(
              selector,
              currentVal.replace('~', field + '/' + index)
            );
          });
        });
      });

      tel.parentNode.removeChild(tel);
    },
    'data-fir-content': function(tel) {
      var field = tel.getAttribute('data-fir-content');
      tel.innerText = that.getDeepItem(data, field);
    },
	'data-fir-link': function(tel) {
	  var field = tel.getAttribute('data-fir-link');
      tel.href='https://schweizmobil.ch'+that.getDeepItem(data, field);
    },
    'data-fir-click': function(tel) {
      tel.addEventListener('click', function() {
        var field = tel.getAttribute('data-fir-click');
        that.getDeepItem(data, field)();
      });
    },
    'data-fir-if': function(tel) {
      var field = tel.getAttribute('data-fir-if');
      if (!that.getDeepItem(data, field)) {
        tel.style.display = 'none';
      }
    },
    'data-fir-if-not': function(tel) {
      var field = tel.getAttribute('data-fir-if-not');
      if (that.getDeepItem(data, field)) {
        tel.style.display = 'none';
      }
    },
    'data-fir-attr': function(tel) {
      var chunks = tel.getAttribute('data-fir-attr').split(':');
      var attr = chunks[0];
      var field = chunks[1];
      tel.setAttribute(attr, that.getDeepItem(data, field));
    },
    'data-fir-style': function(tel) {
      var chunks = tel.getAttribute('data-fir-style').split(':');
      var attr = chunks[0];
      var field = chunks[1];
      var value = that.getDeepItem(data, field);

      if (attr.toLowerCase() === 'backgroundimage') {
        value = 'url(' + value + ')';
      }
      tel.style[attr] = value;
    }
  };

  var preModifiers = ['data-fir-foreach'];

  preModifiers.forEach(function(selector) {
    var modifier = modifiers[selector];
    that.useModifier(el, selector, modifier);
  });

  Object.keys(modifiers).forEach(function(selector) {
    if (preModifiers.indexOf(selector) !== -1) {
      return;
    }

    var modifier = modifiers[selector];
    that.useModifier(el, selector, modifier);
  });
};
*/

/*
Wegweiser.prototype.useModifier = function(el, selector, modifier) {
  el.querySelectorAll('[' + selector + ']').forEach(modifier);
};

Wegweiser.prototype.getDeepItem = function(obj, path) {
  path.split('/').forEach(function(chunk) {
    obj = obj[chunk];
  });
  return obj;
};
*/
/*
Wegweiser.prototype.replaceElement = function(parent, content) {
  parent.innerHTML = '';
  parent.append(content);
};

Wegweiser.prototype.rerender = function() {
  this.router.navigate(document.location.pathname + '?' + new Date().getTime());
};
*/