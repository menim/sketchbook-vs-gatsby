const localeData = [
  ...require('react-intl/locale-data/ru'),
  ...require('react-intl/locale-data/uk'),
]

module.exports = {
  localeData,
  languages: [
    { value: 'ru', text: 'ru' },
    { value: 'uk', text: 'ua' },
  ],
}