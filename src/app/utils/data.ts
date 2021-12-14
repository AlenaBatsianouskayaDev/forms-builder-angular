export const INITIAL_STYLES = {
  isCurrentElement: false,

  label: 'Enter your text',
  placeholder: 'Enter your placeholder',

  width: '200',
  height: '20',
  required: false,
  borderStyle: '',
  fontSize: '14',
  fontWeight: '400',
  color: 'black',
  //
  buttonText: 'button text',
  backgroundColor: '#DBF3FA',
  buttonWidth: '100',
  buttonHeight: '40',
  //
  textareaWidth: '250',
  textareaHeight: '30',
}

export const INITIAL_ELEMENTS = ['input', 'textarea', 'select', 'checkbox', 'button']

export const STYLES = {
  'width': 'item.width', 
  'height': 'item.height',
  'border': 'item.borderStyle',
  'font-size': 'item.fontSize',
  'font-weight': 'item.fontWeight', //TODO: change to stylesFactory????
  'color': 'item.color',
}