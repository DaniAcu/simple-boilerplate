# Simple Boilerplate

I'm a frontend developer and I love playing with styles. So I create this to use it and share with friends a simple way to play with styles. 

IMPORTANT: It was creating it just for learning proposes not to develop a real app.

I use this repo to teach CSS and HTML, so don't pay attention to the JS files if you don't have any idea of that.

# How it works?

You could run this with the following command. 

```bash
yarn dev
```

That will create a server on `localhost:8080` when you could visualized the content inside of `src/index.html`. 
Notice that this html is not a real html document, just it's part of one. The server is building the html with all the styles that you will put on `src/styles.scss`.

# LEGOS
The idea is build with LEGOS formally called components. So I create a simple command to do it this more easy. 

```bash
yarn legos:generate <legos-name>
```
`legos:generate` will create a component with the name that you provide. For sample `yarn legos:generate card` will create a card component that you could use as `<app-card></app-card>` on your html.

It will create a index.html and a style.scss. Wherever you use the tag you will see the html with the style that you provide.

# Insolate component

If you are builing a page, you should build it on `src/index.html` using the components. But if you would like to focus on the component. You could go to `localhost:8080/<lego-name>`. Following the previous example:  `localhost:8080/card` you will see just the card.



