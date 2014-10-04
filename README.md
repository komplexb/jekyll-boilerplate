jekyll boilerplate
=========

This is a Jekyll project utilising [bootstrap-sass](https://github.com/twbs/bootstrap-sass), [bourbon](bourbon.io) mixin library and grunt js to deploy to gh-pages. Check out the boilerplate branch to update it.   

We're using bootstrap sass so that we can easily manage the CSS file size by toggling the bootstrap components we need. This method also allow us to override [boostrap variables](http://getbootstrap.com/customize/#less-variables) (replace '@' with "$')  in one location instead of using find + replace. 

## Requirements
- [Install Jekyll](https://help.github.com/articles/using-jekyll-with-pages#installing-jekyll)  
- [Install Grunt](http://gruntjs.com/getting-started#installing-the-cli)  

## Run the project
`bundle exec jekyll serve --w`

## Deploy the project to gh-pages
Run `grunt deploy` to upload changes to gh-pages branch

## ToDO
- Bootstrap only branch
- Bourbon only branch
- Consider [Neat](neat.bourbon.io) integration