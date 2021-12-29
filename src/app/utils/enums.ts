export enum FieldElements {
  input,
  textarea,
  select,
  checkbox,
  button,
}

export enum BorderStyles {
  solid,
  dotted,
  insent,
  double,
  groove,
  none
}

export enum FontWeight {
  normal,
  bold,
  lighter
}

export enum StylesSections {
  'General Styles',
  'Field Styles',
}

export const AccordionControls = [
  {
    name: 'General styles',
    isExpanded: true
  },
  {
    name: 'Elements styles',
    isExpanded: false
  },
]