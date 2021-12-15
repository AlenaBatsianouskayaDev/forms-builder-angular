export const COLORS = {
  fontColor: '#2a2a2a',
  backgroundColor: 'rgb(239, 239, 239)',
}

export const INITIAL_STYLES = {
  isCurrentElement: false,

  inputLabel: 'Enter text for this field',
  inputPlaceholder: 'Enter placeholder text',
  inputWidth: '200',
  inputHeight: '20',
  inputRequired: false,
  inputBorderStyle: 'insent',
  inputFontSize: '14',
  inputFontWeight: '400',
  inputColor: COLORS.fontColor,

  width: '200',
  height: '20',
  required: false,
  borderStyle: 'insent',
  fontSize: '14',
  fontWeight: '400',
  color: COLORS.fontColor,
  
  buttonText: 'button text',
  buttonWidth: '100',
  buttonHeight: '40',
  buttonFontSize: '14',
  buttonFontWeight: 'normal',
  buttonColor: COLORS.fontColor,
  buttonBackgroundColor: COLORS.backgroundColor,
  
  textareaFieldText: 'Enter text for this field',
  textareaPlaceholder: 'Placeholder text',
  textareaWidth: '250',
  textareaHeight: '30',
  textareaRequired: false,
  textareaBorderStyle: 'insent',
  textareaFontSize: '14',
  textareaFontWeight: 'normal',
  textareaColor: COLORS.fontColor,
 
  selectLabel: 'Enter text for this field',
  selectWidth: '200',
  selectHeight: '20',
  selectRequired: false,
  selectBorderStyle: 'insent',
  selectFontSize: '14',
  selectFontWeight: 'normal',
  selectColor: COLORS.fontColor,

  checkboxFieldText: 'Enter text for this field',
  checkboxLabel: 'Enter label',
  checkboxWidth: '20',
  checkboxHeight: '20',
  checkboxRequired: false,
}

export const INITIAL_ELEMENTS = ['input', 'textarea', 'select', 'checkbox', 'button']

export const BORDER_STYLES = ['solid', 'dotted', 'insent', 'double', 'groove', 'none']

export const FONT_WEIGHT = ['normal', 'bold', 'lighter'];

export const STYLES = {
  'width': 'item.width', 
  'height': 'item.height',
  'border': 'item.borderStyle',
  'font-size': 'item.fontSize',
  'font-weight': 'item.fontWeight', //TODO: change to stylesFactory????
  'color': 'item.color',
}