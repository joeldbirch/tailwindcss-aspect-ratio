# Aspect Ratio Tailwind Plugin

## Installation

Add this plugin to your project:

```bash
# Install via npm
npm install --save-dev tailwindcss-aspect-ratio
```

## Usage

In addition to useful defaults, the aspect ratio plugin exposes options for you to add further ratios. Here is the example for adding it to your project plugins

```js
require('tailwindcss-aspect-ratio')({
  ratios: {
    '21/9': [21, 9],
  },
})
```

This configuration would create the following classes:

```
.o-aspect-ratio // "square" by default
.o-aspect-ratio-16/9
.o-aspect-ratio-2/1
.o-aspect-ratio-4/3
.o-aspect-ratio-21/9
```

The plugins accepts an object where the key is the suffix of the class name and the the value is an array of width and height `[{width}, {height}]`.

In the example above you can see that the key does not have to replicate the values, so if you prefer "nice names" you could have some like `'cinema': [21, 9]` or `'letterbox': [16,9]`.

As per the [tailwind plugin docs](https://tailwindcss.com/docs/plugins/) you are able to pass variants (responsive, hover, etc.) as a parameter.

```js
require('tailwindcss-aspect-ratio')({
  ratios: {
    square: [1, 1],
    '16/9': [16, 9],
    '4/3': [4, 3],
    '21/9': [21, 9],
  },
  variants: ['responsive', 'hover'],
})
```

Using the above should mean your plugins config looks something like this:

```js
// example plugins section of tailwind.js config file

plugins: [
  require('tailwindcss/plugins/container')({
    //center: true,
    // padding: '1rem',
  }),
  require('tailwindcss-aspect-ratio')({
    ratios: {
      'square': [1, 1],
      '16/9': [16, 9],
      '4/3': [4, 3],
      '21/9': [21, 9],
    }
  }),
],
```
