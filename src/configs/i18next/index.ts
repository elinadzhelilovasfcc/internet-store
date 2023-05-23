import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector  from 'i18next-browser-languagedetector'
// import translationEn from "./locales/en/translation.json";
import INPUT_EN from './locales/en/input.json'
export const resources = {
    en: {
        input: INPUT_EN
    },
} as const

i18n
.use(LanguageDetector)
.use(initReactI18next).init({
    debug: true,
    fallbackLng: "en",
    resources,
    interpolation: {
        escapeValue: false
    }
})

export default i18n