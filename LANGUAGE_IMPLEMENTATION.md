# Language Switching Implementation

## Overview

This document outlines the implementation of a language switching functionality for the EventPro website. The system allows users to switch between English and Malayalam languages, with the content of the entire website changing accordingly.

## Components Created

1. **LanguageContext.jsx**

   - Creates a context to manage language state across the application
   - Provides functions to change language and check current language
   - Persists language preference in localStorage

2. **translations.js**

   - Contains translation objects for both English and Malayalam
   - Organized by categories (header, common, services, etc.)
   - Easy to extend with new translations

3. **index.js (in translations folder)**

   - Provides utility functions to get translations
   - Includes a custom hook for easy use in components

4. **TranslatedButton.jsx**

   - Reusable component for translated buttons
   - Automatically handles language switching

5. **TranslatedViewDetailsButton.jsx**
   - Specific component for "View Details" buttons
   - Ensures consistent translation across the application

## Implementation Details

### Language Context Provider

The `LanguageProvider` component wraps the entire application in `AppLayout.jsx`, making language state available throughout the app.

### Header Component

The Header component has been updated to:

- Use the language context
- Change the application language when a user selects a different language
- Display the current language
- Translate the "Sign In" button

### Footer Component

The Footer component has been updated to translate the "All Rights Reserved" text.

### HomePage Component

The HomePage component has been updated to translate:

- Section titles
- Service category names
- Button text

## How to Use in New Components

To use translations in a new component:

```jsx
import { useLanguage } from "../context/LanguageContext";
import { useTranslation } from "../translations";

const MyComponent = () => {
  const { language } = useLanguage();
  const translate = useTranslation(language);

  return (
    <div>
      <h1>{translate("someKey")}</h1>
      <p>{translate("anotherKey")}</p>
    </div>
  );
};
```

## Adding New Translations

To add new translations:

1. Open `src/translations/translations.js`
2. Add new key-value pairs to both `englishTranslations` and `malayalamTranslations` objects
3. Use the same key in your components with the `translate` function

## Future Improvements

1. Add more languages as needed
2. Implement RTL (Right-to-Left) support for languages that require it
3. Create a more comprehensive translation management system
4. Add automated translation verification
