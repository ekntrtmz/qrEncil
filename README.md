# qrEncil

Make your QR codes stencilproof. Generates svg and png from string input.

## Getting Started

```
//  Needs Chromium for generating .png from .svg
npm i
```

```javascript
//  If calling from external file
const {qrEncil} = require('./index.js');

let qrContent = "Some content here";

//  Outputs .svg and .png file
qrEncil(qrContent);
```
## Authors

* **ekntrtmz** - *Initial work* - [on github](https://github.com/ekntrtmz)


## License

This project is licensed under the MIT License

## Acknowledgments

* [Gola Lewin](https://github.com/golanlevin) for bridging idea
* [shaddack.twibright](http://www.shaddack.twibright.com/projects/) for fragmentation idea
