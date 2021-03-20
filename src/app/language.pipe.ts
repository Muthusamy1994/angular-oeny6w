import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "language"
})
export class LanguagePipe implements PipeTransform {
  languageset = {
    TAMIL: {
      HOME: "வீடு",
      LOGIN: "உள்நுழைய",
      USERNAME: "பயனர்பெயர்",
      PASSWORD: "கடவுச்சொல்",
      SUBMIT: "சமர்ப்பிக்கவும்",
      SIGNUP: "பதிவுபெறுதல்",
      ERRORPAGE: "பிழை பக்கம்",
      SWITCHPAGE: "சுவிட்ச்பேஜ்"
    },
    ENGLISH: {
      HOME: "Home",
      LOGIN: "login",
      USERNAME: "பயனர்பெயர்",
      PASSWORD: "கடவுச்சொல்",
      SUBMIT: "சமர்ப்பிக்கவும்",
      SIGNUP: "T-signup",
      ERRORPAGE: "T-errorpage",
      SWITCHPAGE: "T-switchpage"
    }
  };
  transform(value: any, args?: any): any {
    let language = "TAMIL";
    if (this.languageset[language][value]) {
      return this.languageset[language][value];
    } else {
      return "muthu";
    }

    console.log(value);
    console.log(args);
    return "muthu";
  }
}
