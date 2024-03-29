const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

module.exports = function override(config, env) {

    config.plugins.push(new MonacoWebpackPlugin({
        languages: ['abap' , 'apex' , 'azcli' , 'bat' , 'bicep' , 'cameligo' , 'clojure' , 'coffee' , 'cpp' , 'csharp' , 'csp' , 'css' , 'cypher' , 'dart' , 'dockerfile' , 'ecl' , 'elixir' , 'flow9' , 'freemarker2' , 'fsharp' , 'go' , 'graphql' , 'handlebars' , 'hcl' , 'html' , 'ini' , 'java' , 'javascript' , 'json' , 'julia' , 'kotlin' , 'less' , 'lexon' , 'liquid' , 'lua' , 'm3' , 'markdown' , 'mdx' , 'mips' , 'msdax' , 'mysql' , 'objective-c' , 'pascal' , 'pascaligo' , 'perl' , 'pgsql' , 'php' , 'pla' , 'postiats' , 'powerquery' , 'powershell' , 'protobuf' , 'pug' , 'python' , 'qsharp' , 'r' , 'razor' , 'redis' , 'redshift' , 'restructuredtext' , 'ruby' , 'rust' , 'sb' , 'scala' , 'scheme' , 'scss' , 'shell' , 'solidity' , 'sophia' , 'sparql' , 'sql' , 'st' , 'swift' , 'systemverilog' , 'tcl' , 'twig' , 'typescript' , 'vb' , 'wgsl' , 'xml' , 'yaml']
    }));
    return config;
}
