const { isPackageExists } = require('local-pkg')

const IS_VUE = isPackageExists('vue')
const IS_REACT = isPackageExists('react')

const frameExtends = [
  IS_VUE ? '@Jason-huang66/eslint-config-vue' : null,
  IS_REACT ? '@Jason-huang66/eslint-config-react' : null
]


module.exports = {
  extends: [
    ...frameExtends.filter(ext => ext !== null)
  ],
}
