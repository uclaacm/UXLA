

module.exports = function(eleventyConfig) {

    //Tell 11ty to search these directories for files
    eleventyConfig.addPassthroughCopy('src/css');
    eleventyConfig.addPassthroughCopy('src/pages');
    eleventyConfig.addPassthroughCopy('src/assets');

    //make sure all html files in the pages directory uses the default layout
    //eleventyConfig.addDefaultLayout('src/pages/*.html', 'src/_includes/default.html');

    //Tell 11ty that all files 
    return {
        passthroughFileCopy: true,
        pathPrefix: "/",
        dir: {
           input: "src",
            output: "_site"
            //includes: "_includes"
        }
    }

}
 