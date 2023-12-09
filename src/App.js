import React from 'react';
import { useTranslation } from 'react-i18next';


const App = () => {
const{i18n, t} = useTranslation();

const toggleLang = () => {
  i18n.changeLanguage(i18n.language === 'en'? 'uk':'en')
}
  return (
    <div>
      <h1>{t('Welcome to React')}</h1>
      <button onClick={toggleLang}>
        {i18n.language === 'en'? 'en':'uk'}
      </button>
    </div>
  );
};

export default App;
