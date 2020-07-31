module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier', 'prettier/react'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': ['warn', { extension: ['.jsx', '.js', '.tsx'] }],
    'import/prefer-default-export': 'off',
  },

  settings: {
    // Configuramos o parser para reconhecer as extensões corretamente ****
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        // Diretório do tsconfig.json
        directory: '.',
      },
      // Configura o resolver do node para reconhecer arquivos com extensão .ts e .tsx
      node: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
      },
      // Configuramos o resolver do root import. A configuração é muito semelhante a do plugin em si.
      'babel-plugin-root-import': {
        paths: [
          {
            rootPathSuffix: 'src',
          },
        ],
      },
    },
  },
};
