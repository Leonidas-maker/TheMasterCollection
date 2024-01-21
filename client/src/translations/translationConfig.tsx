import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import de from "./de.json";
import en from "./en.json";

interface Resources {
  en: { translation: typeof en };
  de: { translation: typeof de };
}

const resources: Record<string, { translation: typeof en | typeof de }> = {
  en: {
      translation: en
  },
  de: {
      translation: de
  }
};

// Set standard language based on browser language
// If language not available set to 'en'
const getDefaultLanguage = (): keyof Resources => {
  const browserLang = navigator.language.split("-")[0];
  return resources[browserLang as keyof Resources] ? (browserLang as keyof Resources) : 'en';
}

// Choose language from localStorage, if not in storage choose from browser language
const language = localStorage.getItem('language') || getDefaultLanguage();

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: language,
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;