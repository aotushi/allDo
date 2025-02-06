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
    files: ['**/*.vue'], // 修改匹配模式
    languageOptions: {
      parser: pluginVue.parser, // 使用 Vue 解析器
      parserOptions: {
        parser: tseslint.parser, // TypeScript 解析器作为 Vue 解析器的子解析器
        sourceType: 'module',
        ecmaVersion: 'latest',
        extraFileExtensions: ['.vue'],
        project: './tsconfig.app.json', // 指定 tsconfig
      },
    },
    rules: {
      'vue/multi-word-component-names': 'off',
    },
  },
  {
    files: ['src/*.{js,ts}'],
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
