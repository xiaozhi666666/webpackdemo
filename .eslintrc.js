module.exports = {
  // 指定 ESLint 使用 @typescript-eslint/parser 作为解析器
  parser: '@typescript-eslint/parser',
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: [
    'airbnb', // 使用 Airbnb 的 ESLint 配置
    'prettier', // 主要解决一下prettier 打架的问题
    'plugin:compat/recommended', // 检查 JavaScript 代码兼容性
    'eslint:recommended', // 使用 ESLint 的推荐配置，包括一些基本的错误检查
    'plugin:@typescript-eslint/recommended', // 使用 @typescript-eslint 插件的推荐配置，适用于 TypeScript 项目
    'plugin:import/errors', // import 插件的错误和警告规则，确保模块导入的正确性和最佳实践
    'plugin:import/warnings', // import 插件的错误和警告规则，确保模块导入的正确性和最佳实践
    'plugin:react-hooks/recommended', // 确保 React Hooks 的正确使用
  ],
  plugins: ['@typescript-eslint'], // 声明项目中使用的 ESLint 插件
  env: {
    browser: true, // 项目代码将在浏览器环境中运行
    node: true, // 项目代码将在 Node.js 环境中运行
    es6: true, // 项目代码使用 ES6+ 语法
  },
  // 全局变量
  globals: {
    APP_TYPE: true,
    page: true,
  },
  // 一些规则的使用，可以关闭和修改一些规则，懂得都懂
  rules: {
    // 打架的规则
    'no-extra-semi': 'off',
    'no-mixed-spaces-and-tabs': 'off',
    'no-unexpected-multiline': 'off',
    // react
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'no-use-before-define': 'off',
  },
  // 解析器选项
  parserOptions: {
    ecmaVersion: 2020, // 指定 ECMAScript 版本
    sourceType: 'module', // 指定源代码模块类型
    ecmaFeatures: {
      jsx: true, // 启用 JSX
    },
  },
};
