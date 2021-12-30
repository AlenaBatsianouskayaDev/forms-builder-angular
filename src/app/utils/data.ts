export const COLORS = {
  fontColor: '#2a2a2a',
  backgroundElementColor: 'rgba(15, 120, 168, 0.5)',
  whiteColor: '#ffffff',
  greyColor: '#d3d3d3'
}

export const INITIAL_ELEMENTS_STYLES = {
  isCurrentElement: false,
  fieldText: 'Field text',
  label: 'Field label',
  text: 'Button',
  placeholder: 'Placeholder text',
  width: '200',
  height: '40',
  required: '',
  border: 'insent',
  fontSize: '14',
  fontWeight: 'normal',
  color: COLORS.fontColor,
  backgroundColor: COLORS.backgroundElementColor,
  options: ['option1', 'option2', 'option3'], ///add to form control
}

export const INITIAL_GENERAL_STYLES = {
  name: 'General styles',
  title: 'Form Title',
  fontSize: '14',
  fontWeight: 'normal',
  color: COLORS.fontColor,
  backgroundColor: COLORS.whiteColor,
  borderColor: COLORS.greyColor,
}

export const STYLES_TYPES_FOR_ELEMENTS = {
  MAT_FORM_FIELD_STYLES: ['width', 'border', 'fontSize', 'fontWeight', 'color'],
  MAT_LABEL_STYLES: ['color'],
  MAT_SELECT_STYLES: ['height'],
  MAT_OPTION_STYLES: ['color', 'fontSize'],  
  CHECKBOX_STYLES: ['width', 'height'],
  BUTTON_STYLES: ['width', 'height', 'fontSize', 'fontWeight', 'color', 'backgroundColor'],
  TEXTAREA_STYLES: ['height'],
  INPUT_STYLES: ['height'],
  FORM_GENERAL_STYLES: ['fontSize', 'color', 'backgroundColor', 'borderColor'],
  TITLE_GENERAL_STYLES: ['fontSize', 'fontWeight', 'color'],
}

