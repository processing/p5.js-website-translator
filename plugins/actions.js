const yaml = require('js-yaml')
const flat = require('flat')

function buildCardsData(
  lang,
  filterOption,
  webpage,
  flattenedOriginalFile,
  flattenedTranslatedFile
) {
  const data = []
  for (const key in flattenedOriginalFile) {
    if (filterOption === 'Translated') {
      if (flattenedOriginalFile[key] === flattenedTranslatedFile[key]) {
        continue
      }
    } else if (filterOption === 'To be translated') {
      if (flattenedOriginalFile[key] !== flattenedTranslatedFile[key]) {
        continue
      }
    }
    const obj = {
      page: webpage,
      language: lang,
      strKey: key,
      originalStr: flattenedOriginalFile[key],
      translatedStr: flattenedTranslatedFile[key],
      cardColor:
        flattenedOriginalFile[key] === flattenedTranslatedFile[key]
          ? 'border-left: 4px solid green;'
          : 'border: none',
    }
    data.push(obj)
  }
  return data
}

function buildEditedTranslatedFile(translatedFile, fileChanges) {
  for (const key in fileChanges) {
    translatedFile[key] = fileChanges[key]
  }
  return translatedFile
}

function getLanguages(pkgJSON) {
  const languages = pkgJSON.languages.filter((v) => v !== 'en')
  return languages
}

function downloadFileJSON(language, obj) {
  const flatObj = flat.unflatten(obj, { delimiter: '/' })
  const strObj = JSON.stringify(flatObj, null, 2)
  const blob = new Blob([strObj], { type: 'application/json' })

  const a = document.createElement('a')
  a.download = 'reference_' + language
  a.href = URL.createObjectURL(blob)
  a.dataset.downloadurl = ['application/json', a.download, a.href].join(':')
  document.body.appendChild(a)
  a.click()

  document.body.removeChild(a)
  setTimeout(function () {
    URL.revokeObjectURL(a.href)
  }, 1500)
}

function downloadFileYAML(language, obj) {
  const flatObj = flat.unflatten(obj, { delimiter: '/' })
  const strObj = yaml.safeDump(flatObj)
  const blob = new Blob([strObj], { type: 'application/x-yaml' })

  const a = document.createElement('a')
  a.download = 'website_' + language
  a.href = URL.createObjectURL(blob)
  a.dataset.downloadurl = ['application/x-yaml', a.download, a.href].join(':')
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)

  setTimeout(function () {
    URL.revokeObjectURL(a.href)
  }, 1500)
}

module.exports = {
  buildCardsData,
  buildEditedTranslatedFile,
  getLanguages,
  downloadFileJSON,
  downloadFileYAML,
}
