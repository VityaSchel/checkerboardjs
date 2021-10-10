# Checkerboard.js

Easily draw transparency pattern on canvas when flattenning images

## Installation

```
$ npm i checkerboardjs
```

## Usage

```
drawPattern(context<CanvasRenderingContext>, ?options<Object>)
```

### Options

Property|Type|Default|Description
---|---|---|---
centered|bool|false|Draws pattern from center instead of left top corner
ignoreWarnings|bool|false|Ignores any errors and warnings
primaryColor|string|#EDEDED|CSS color of even cells
secondaryColor|string|#C6C6C6|CSS color of odd cells
size|number|10|Size of cell in pixels

## Example

```javascript
import drawPattern from 'checkerboardjs'

const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')

drawPattern(context)
```

## Contributing, license, issues

blah blah blah go find something better to do and don't bother me