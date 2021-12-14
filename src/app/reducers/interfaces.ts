export interface IFormElement {
  isCurrentElement: boolean,

  name: string,
  id: string,

  label?: string,
  placeholder?: string,
  width?: string,
  height?: string,
  required?: boolean,
  borderStyle?: string,
  fontSize?: string,
  fontWeight?: string,
  color?: string,
  //
  buttonText?: string,
  backgroundColor?: string,
  buttonWidth?: string,
  buttonHeight?: string,
}

export interface IElementStyles {
  label?: string,
  placeholder?: string,
  width?: string,
  height?: string,
  required?: boolean,
  borderStyle?: string,
  fontSize?: string,
  fontWeight?: string,
  color?: string,
  //
  buttonText?: string,
  backgroundColor?: string,
  buttonWidth?: string,
  buttonHeight?: string,
}

export interface IElementData {
  name: string,
  id: string,
}