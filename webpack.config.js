var webpack = require( "webpack" );
    var path = require( "path" );  // A node.js library to resolve the path of my application

    var DIST_DIR = path.resolve( __dirname, "dist" );  // distribution directory where to distribute weback output
    var SRC_DIR = path.resolve( __dirname, "src" );  // Source directory where to get webpack input

    var config = {  // config object holds configurations of webpack in our project
	mode: 'development',
        entry: SRC_DIR + "/app/index.js",  // webpack entry point(where webpack starts its job)
        output: {  // where webpack should output everything
            path: DIST_DIR + "/app",
            filename: "bundle.js",
            publicPath: "/app/" // for webpack development server
        },
        module: {  // modules used like transpiling
            rules: [
                {
                    test: /\.js?/,  // which kind of files this loader work with
                    include: SRC_DIR,  // where to find these files
                    loader: "babel-loader",  // what kind of loader
                    query: {
                        presets: ["@babel/react", "@babel/env"]
                    }
                }
            ]
        }  
    };

    module.exports = config; // export the config object
