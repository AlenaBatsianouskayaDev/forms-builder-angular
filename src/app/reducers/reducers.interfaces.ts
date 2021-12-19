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
  isCurrentElement?: boolean,

  name?: string,
  id?: string,

  inputFieldText?: string,
  inputLabel?: string,
  inputPlaceholder?: string,
  inputWidth?: string,
  inputHeight?: string,
  inputRequired?: string,
  inputBorderStyle?: string,
  inputFontSize?: string,
  inputFontWeight?: string,
  inputColor?: string,

  buttonText?: string,
  buttonWidth?: string,
  buttonHeight?: string,
  buttonFontSize?: string,
  buttonFontWeight?: string,
  buttonColor?: string,
  buttonBackgroundColor?: string,

  textareaFieldText?: string,
  textareaLabel?: string,
  textareaPlaceholder?: string,
  textareaWidth?: string,
  textareaHeight?: string,
  textareaRequired?: string,
  textareaBorderStyle?: string,
  textareaFontSize?: string,
  textareaFontWeight?: string,
  textareaColor?: string,

  selectFieldText?: string;
  selectLabel?: string,
  selectWidth?: string,
  selectHeight?: string,
  selectRequired?: string,
  selectBorderStyle?: string,
  selectFontSize?: string,
  selectFontWeight?: string,
  selectColor?: string,
  selectOptions?: string[],
  
  checkboxFieldText?: string,
  checkboxLabel?: string,
  checkboxWidth?: string,
  checkboxHeight?: string,
  checkboxRequired?: string,
}

export interface IGeneralStylesData {
  formTitle?: string,
  formGeneralFontSize?: string,
  formGeneralFontWeight?: string,
  formGeneralColor?: string,
  formGeneralBcgColor?: string,
  formGeneralBorderColor?: string,
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



