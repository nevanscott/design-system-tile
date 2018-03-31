var settings = [
  {
    label: "Typography",
    controls: [
      {
        label: "Font Size Interval",
        property: "--interval",
        value: "1.0",
        min: "1.0",
        max: "2.0",
        step: "0.05"
      }
    ]
  },
  {
    label: "Spacing",
    controls: [
      {
        label: "Base Space",
        property: "--space",
        value: "0",
        min: "0",
        max: "32",
        step: "4",
        unit: "px"
      },
      {
        label: "Space Ratio",
        property: "--space-ratio",
        value: "0.5",
        min: "0.5",
        max: "2.0",
        step: "0.1"
      }
    ]
  }
];

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

App.prototype.setProperty = function(property, value) {
  document.getElementsByClassName('artboard')[0].contentDocument.documentElement.style.setProperty(property,value);
}

var app = new App(settings);
