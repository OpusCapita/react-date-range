import translationsDefaultProps from './default-props';

export default (translations, key, subKey) => (
  subKey
    ? (translations[key] || {})[subKey] || translationsDefaultProps[key][subKey]
    : translations[key] || translationsDefaultProps[key]
);
