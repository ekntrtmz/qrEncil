# qrEncil

Make your QR codes [stencilproof](http://www.fredtrotter.com/2011/03/02/qr-code-stencils-problem/). Generates svg and png from string input.

## Getting Started
Install via npm

```
npm i qrencil
```
Use in your app

```javascript
const {qrEncil} = require('qrencil');

let qrContent = "Some content here";

//  Outputs .svg and .png file
qrEncil(qrContent);
```

## To Do
Optimize svg output. Add custom params.

## Authors

* **ekntrtmz** [on github](https://github.com/ekntrtmz)


## License

This project is licensed under the MIT License

## Acknowledgments

* [Golan Lewin](https://github.com/golanlevin) for bridging idea
* [shaddack.twibright](http://www.shaddack.twibright.com/projects/) for fragmentation idea
