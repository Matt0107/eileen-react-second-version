import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Importez vos fichiers de traduction
import translationEN from './locales/en/translation.json';
import translationDE from './locales/de/translation.json';

// Configuration d'i18next
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: translationEN },
      de: { translation: translationDE },
    },
    lng: 'en', // Langue par défaut
    fallbackLng: 'en', // Langue de secours
    interpolation: {
      escapeValue: false, // React échappe automatiquement le contenu
    },
  });

export default i18n;
