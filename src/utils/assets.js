import pinglogo from '../assets/ping-logo.svg'

export default class Assets {

  constructor(options) {
    this.logo = (options && options.logo) || pinglogo;
    this.error = (options && options.error) || 'https://assets.pingone.com/ux/end-user/error.svg';
    this.spinner = (options && options.spinner) || 'https://assets.pingone.com/ux/end-user/spinner.svg'
  }

  toTemplateParams() {
    var result = {
      logo: this.logo,
      error: this.error,
      spinner: this.spinner
    }
    return result
  }
}
