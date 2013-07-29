# heredoc
multiline strings for javascript

## usage

this technique takes advantage of `Function.prototype.toString()`

```js
    var heredoc = require('heredoc')
    var str = heredoc(function () {/*
    within this comment block,
    any text
    will
      be
        treated
          as
      pre-formatted
        multiline text
    (kinda like html <pre>)
    */})
    console.log(str)
```

You can also strip leading indentation:

```js
var text = heredoc.strip(function() {/*
      <body>
        <p>indented strings are fine.</p>
        <p>the preceding spaces will be shrinked.</p>
      </body>
    */})
```

will result in:

```
<body>
  <p>indented strings are fine.</p>
  <p>the preceding spaces will be shrinked.</p>
</body>

```

## AMD

`heredoc` defines itself as an AMD module for use in AMD environments.

## installation

    $ npm install heredoc

## contributors
  
  - jden <jason@denizac.org>
  - Jason Kuhrt <jasonkuhrt@me.com>
  - Guy Bedford <guybedford@gmail.com>
  - Jake Chen <jakeplus@gmail.com>

## kudos

thanks to @izs - I first saw this technique when reading through npm source. I find it to be much neater than lots of manual string concatenation.

## license
AS-IS