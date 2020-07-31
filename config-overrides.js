const { override, addBabelPlugin } = require('customize-cra');

// Exportamos a função 'override' para sobreescrever algumas funcionalidades do webpack
module.exports = override(
  // Utilizamos a função 'addBabelPlugin' para adicionar um novo plugin
  addBabelPlugin([
    // Informamos o nome do plugin na primeira posição do array
    'babel-plugin-root-import',
    // E as configurações na segunda posição
    {
      paths: [
        {
          // Quando não informamos um prefixo, o plugin irá utilizar ~ como padrão
          rootPathSuffix: 'src',
        },
      ],
    },
  ]),

  addBabelPlugin(['emotion'])
);
