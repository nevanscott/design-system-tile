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
      },
      {
        label: "Line Height",
        property: "--line-height",
        value: "1.4",
        min: "1.3",
        max: "1.7",
        step: "0.05"
      },
      {
        label: "Display Font",
        property: "--font-family-display",
        value: "var(--font-family-sans)",
        options: [
          {
            label: "Sans",
            value: "var(--font-family-sans)"
          },
          {
            label: "Serif",
            value: "var(--font-family-serif)"
          }
        ]
      },
      {
        label: "Text Font",
        property: "--font-family-text",
        value: "var(--font-family-serif)",
        options: [
          {
            label: "Sans",
            value: "var(--font-family-sans)"
          },
          {
            label: "Serif",
            value: "var(--font-family-serif)"
          }
        ]
      }
    ]
  },
  {
    label: "Spacing",
    controls: [
      {
        label: "Base Space",
        property: "--space",
        value: "1",
        min: "1",
        max: "8",
        step: "1",
        unit: "px"
      },
      {
        label: "Space Ratio",
        property: "--space-ratio",
        value: "0.5",
        min: "0.5",
        max: "2.0",
        step: "0.05"
      }
    ]
  },
  {
    label: "Color",
    controls: [
      {
        label: "Base Hue",
        property: "--hue",
        value: "50",
        min: "0",
        max: "360",
        step: "1"
      },
      {
        label: "Hue Spread",
        property: "--hue-offset",
        value: "145",
        min: "0",
        max: "180",
        step: "1"
      },
      {
        label: "Hue Shift",
        property: "--hue-shift",
        value: "15",
        min: "-30",
        max: "30",
        step: "1"
      }
    ]
  }
];

var app = new App(settings);
