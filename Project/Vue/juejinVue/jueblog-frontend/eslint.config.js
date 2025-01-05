// import globals from "globals";
// import pluginJs from "@eslint/js";
// import tseslint from "typescript-eslint";
// import pluginVue from "eslint-plugin-vue";

// /** @type {import('eslint').Linter.Config[]} */
// export default [
//   {files: ["**/*.{js,mjs,cjs,ts,vue}"]},
//   {languageOptions: { globals: globals.browser }},
//   pluginJs.configs.recommended,
//   ...tseslint.configs.recommended,
//   ...pluginVue.configs["flat/essential"],
//   {files: ["**/*.vue"], languageOptions: {parserOptions: {parser: tseslint.parser}}},
// ];

import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginVue from 'eslint-plugin-vue'
// import filenames from "eslint-plugin-filenames";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,ts,vue}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  {
    files: ['src/*.{js,ts,vue}'],
    languageOptions: { parserOptions: { parser: tseslint.parser } },

    rules: {
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: ['variable', 'parameter', 'property'],
          format: ['snake_case'],
          leadingUnderscore: 'allow',
          trailingUnderscore: 'allow',
        },
        {
          selector: ['function'],
          format: ['camelCase'],
        },
        {
          selector: ['class', 'typeAlias', 'interface'],
          format: ['PascalCase'],
        },
      ],
    },
  },
]
