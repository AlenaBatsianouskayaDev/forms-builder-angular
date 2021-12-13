export interface IFormElement {
  isCurrentElement: boolean,
  name: string,
  id: string,
  label: string,
  placeholder: string,
  width: string,
  height: string,
  required: boolean,
  borderStyle: string,
  fontSize: string,
  fontWeight: string,
  color: string,
}

export interface IElementStyles {
  label: string,
  placeholder: string,
  width: string,
  height: string,
  required: boolean,
  borderStyle: string,
  fontSize: string,
  fontWeight: string,
  color: string,
}

export interface IElementData {
  name: string,
  id: string,
}