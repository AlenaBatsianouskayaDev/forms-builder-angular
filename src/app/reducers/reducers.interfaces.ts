import { RouterReducerState} from '@ngrx/router-store';

export interface IAppState {
  router?: RouterReducerState,
  auth: IAuthState,
  formBuilder: IFormBuilderState,
}

export interface IAuthState {
  username: string,
  token: string,
  isLoading: boolean,
  error: string,
}

export interface IRequestData {
  username: string,
  password: string,
}

export interface IAccessData {
  username: string,
  token: string,
}

export interface IErrorData {
  error: string,
}

export interface IFormBuilderState {
  generalStyles: IGeneralStylesData,
  components: IFormFieldData[],
}

export interface IFormFieldData {
  [propName: string]: string | string[] | boolean | undefined | null,
  isCurrentElement?: boolean,
  name?: string,
  id?: string,
  fieldText?: string,
  label?: string,
  text?: string,
  placeholder?: string,
  width?: string,
  height?: string,
  required?: string,
  border?: string,
  fontSize?: string,
  fontWeight?: string,
  color?: string,
  backgroundColor?: string,
  options?: string[],
}

export interface IGeneralStylesData {
  [propName: string]: string | undefined,
  name?: string,
  title?: string,
  fontSize?: string,
  fontWeight?: string,
  color?: string,
  backgroundColor?: string,
  borderColor?: string,
}

export interface IFormFieldName {
  name: string,
}

export interface IFormFieldId {
  id: string,
}
  
export interface IFormFieldOrder {
  prevIndex: number,
  currentIndex: number, 
}

export interface IFormFieldForDelete {
  id: string, 
}
