//form webpack.config.js

{
        test: /\.ts$|\.tsx?$/, 
        exclude: /node_modules/,
        loader: 'awesome-typescript-loader'
}


//form tsconfig.json
{
        "compilerOptions": {
        "outDir": "./src",
            "sourceMap": true,
            "noImplicitAny": true,
            "module": "commonjs",
            "target": "es5",
            "jsx": "preserve"
},
        "files": []
}