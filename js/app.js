var $tools = document.querySelector('#tools');

function App(settings) {
  this.settings = settings;
  for (var i = 0; i < this.settings.length; i++) {
    var group = this.settings[i];
    var $group = document.createElement('details');
    var $label = document.createTextNode(group.label);
    var $header = document.createElement('summary');
    $group.setAttribute('open', true);
    $header.appendChild($label);
    $group.appendChild($header);

    for (var j = 0; j < group.controls.length; j++) {
      var control = group.controls[j];
      var key = control.label.toLowerCase().replace(/\s+/g,"-");
      var $labelText = document.createTextNode(control.label);
      var $label = document.createElement('label');
      var $input = this.createControlInput(control);
      $label.appendChild($labelText);
      $label.setAttribute('for', key);
      $group.appendChild($label);
      $group.appendChild($input);
      $tools.appendChild($group);
    }
  }
}

App.prototype.createControlInput = function(control) {
  var app = this;
  var key = control.label.toLowerCase().replace(/\s+/g,"-");
  var property = control.property;
  var unit = control.unit || '';
  if (control.options) {
    var $select = document.createElement('select');
    for (var i = 0; i < control.options.length; i++) {
      var option = control.options[i];
      var $option = document.createElement('option');
      var $optionLabel = document.createTextNode(option.label);
      $option.appendChild($optionLabel);
      $option.setAttribute('value', option.value);
      if (control.value && control.value === option.value) {
        $option.setAttribute('selected', true);
      }
      $select.appendChild($option);
    }
    $select.addEventListener('input', function() {
      console.log(this.value);
      app.setProperty(property,`${this.value}${unit}`);
    })
    return $select;
  } else {
    var $input = document.createElement('input');
    $input.setAttribute('id', key);
    $input.setAttribute('type', 'range');
    if (control.min) {
      $input.setAttribute('min', control.min);
    }
    if (control.max) {
      $input.setAttribute('max', control.max);
    }
    if (control.step) {
      $input.setAttribute('step', control.step);
    }
    $input.addEventListener('input', function() {
      app.setProperty(property,`${this.value}${unit}`);
    })
    if (control.value) {
      $input.setAttribute('value', control.value);
    }
    return $input;
  }
}

App.prototype.setProperty = function(property, value) {
  document.getElementsByClassName('artboard')[0].contentDocument.documentElement.style.setProperty(property,value);
}
