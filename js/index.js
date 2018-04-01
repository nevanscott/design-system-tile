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
        value: "1.0",
        min: "1.0",
        max: "2.0",
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

var app = new App(settings);
