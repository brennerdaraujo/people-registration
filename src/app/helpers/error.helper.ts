export class ErrorHelper {
  getErrorMessage(errors: any): string {
    if (errors['required'])
      return 'Campo obrigatório.'

    if (errors['mask'])
      return 'Formato do campo inválido.'

    return '';
  }
}
