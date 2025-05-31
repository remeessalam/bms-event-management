# Language Translation System

This directory contains the translation system for the EventPro application. The system allows for switching between English and Malayalam languages throughout the application.

## How to Use

### In Components

To use translations in your components:

1. Import the necessary hooks:

```jsx
import { useLanguage } from "../context/LanguageContext";
import { useTranslation } from "../translations";
```

2. Use the hooks in your component:

```jsx
const { language } = useLanguage();
const translate = useTranslation(language);
```

3. Use the translate function with the appropriate key:

```jsx
<h1>{translate('welcomeMessage')}</h1>
<p>{translate('heroSubtitle')}</p>
<button>{translate('bookNow')}</button>
```

### Adding New Translations

To add new translations, edit the `translations.js` file in this directory:

1. Add a new key-value pair to both `englishTranslations` and `malayalamTranslations` objects
2. Use the same key in both objects to ensure consistency
3. Use the key in your components with the `translate` function

Example:

```js
// In translations.js
export const englishTranslations = {
  // ...existing translations
  newFeature: "New Feature",
};

export const malayalamTranslations = {
  // ...existing translations
  newFeature: "പുതിയ സവിശേഷത",
};

// In your component
<h2>{translate("newFeature")}</h2>;
```

## Language Context

The language state is managed by the `LanguageContext` which provides:

- `language`: Current language ('English' or 'Malayalam')
- `changeLanguage`: Function to change the language
- `isEnglish`: Boolean indicating if current language is English
- `isMalayalam`: Boolean indicating if current language is Malayalam

The selected language is stored in localStorage for persistence between sessions.
