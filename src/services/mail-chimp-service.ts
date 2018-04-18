export class MailChimpService {

    constructor() { }
  
    showMailChimpForm() {
      var mailChimp = localStorage.getItem("mailChimp") == "true";
      var mailChimpLocal =  localStorage.getItem("mailChimpLocal") == "true";
      if (mailChimp) {
        return false;
      } else {
        return mailChimpLocal;
      }
    }
  
    setMailChimpForm(isVisible:boolean){
      localStorage.setItem("mailChimpLocal", isVisible + "");
    }
  
    hideMailChimp() {
      localStorage.setItem("mailChimp", "true");
    }
  }
  