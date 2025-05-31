# Multilingual Support Guide

This guide explains how to use and extend the multilingual support in the EventPro application.

## Overview

The application supports both English and Malayalam languages. The language can be switched using the language selector in the header. All text content throughout the application will change based on the selected language.

## How It Works

1. **Language Context**: A React context (`LanguageContext`) manages the current language state.
2. **Translation Files**: Separate files for each language (`en.js` and `ml.js`) contain all translations.
3. **Translation Utilities**: Helper functions make it easy to use translations in components.
4. **Fallback Mechanism**: If a Malayalam translation is missing, it falls back to English.

## Using Translations in Components

### Method 1: Using Hooks

```jsx
import { useLanguage } from "../context/LanguageContext";
import { useTranslation } from "../translations";

const MyComponent = () => {
  const { language } = useLanguage();
  const translate = useTranslation(language);

  return (
    <div>
      <h1>{translate("welcomeMessage")}</h1>
      <p>{translate("heroSubtitle")}</p>
    </div>
  );
};
```

### Method 2: Using the Translate Component

```jsx
import Translate from "../Components/Translate";

const MyComponent = () => {
  return (
    <div>
      <h1>
        <Translate textKey="welcomeMessage" />
      </h1>
      <p>
        <Translate textKey="heroSubtitle" />
      </p>

      {/* With a different HTML element */}
      <Translate textKey="services" as="h2" className="text-xl" />

      {/* With value interpolation */}
      <Translate textKey="greetingWithName" values={{ name: "John" }} />
    </div>
  );
};
```

## Adding New Translations

1. Open both language files:

   - `src/translations/en.js` for English
   - `src/translations/ml.js` for Malayalam

2. Add new key-value pairs to both files:

```js
// In en.js
export const englishTranslations = {
  // ... existing translations
  newFeature: "New Feature",
  greetingWithName: "Hello, {{name}}!",
};

// In ml.js
export const malayalamTranslations = {
  // ... existing translations
  newFeature: "പുതിയ സവിശേഷത",
  greetingWithName: "നമസ്കാരം, {{name}}!",
};
```

3. Use the new translations in your components:

```jsx
<Translate textKey="newFeature" />
<Translate textKey="greetingWithName" values={{ name: "John" }} />
```

## Adding a New Language

To add a new language:

1. Create a new translation file (e.g., `hi.js` for Hindi) in the `src/translations` directory.
2. Update the language selector in the Header component.
3. Update the `getTranslation` function in `src/translations/index.js` to handle the new language.

## Best Practices

1. **Organize Translations**: Keep translations organized by categories (header, common, services, etc.).
2. **Use Descriptive Keys**: Use clear, descriptive keys that indicate what the text is for.
3. **Keep Languages in Sync**: Ensure all keys exist in all language files.
4. **Use the Translate Component**: For complex text with HTML or interpolation.
5. **Test All Languages**: Regularly test the application in all supported languages.

## Troubleshooting

- **Missing Translation**: If text appears as the key itself, the translation is missing in the current language file.
- **Language Not Changing**: Check if the language context is properly set up and the component is using the translation hooks correctly.
- **Interpolation Not Working**: Ensure the values object contains all required keys and the translation string has the correct placeholders.
