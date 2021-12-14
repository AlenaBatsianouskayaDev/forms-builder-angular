export const INITIAL_STYLES = {
  isCurrentElement: false,
  label: 'Enter your text',
  placeholder: 'Enter your placeholder',
  width: '200',
  height: '20',
  required: false,
  borderStyle: 'solid',
  fontSize: '18',
  fontWeight: '400',
  color: 'black',
}

export const INITIAL_ELEMENTS = ['input', 'textarea', 'select', 'checkbox', 'button']

export const STYLES = {
  'color': 'item.color',
  'width': 'item.width', 
  'height': 'item.height',
  'border': 'item.borderStyle',
  'font-size': 'item.fontSize',
  'font-weight': 'item.fontWeight' //TODO: change to stylesFactory????
}