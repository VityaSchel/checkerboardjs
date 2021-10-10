export default function drawPattern(canvas, options) {
  try {
    if(options !== undefined && typeof options !== 'object') throw { message: 'Options is not an object', libwarn: true }
    if(!HTMLCanvasElement) throw { message: 'HTMLCanvasElement instance not found', libwarn: true }
    if(!canvas) throw { message: 'Canvas not found', libwarn: true }
    if(!(canvas instanceof HTMLCanvasElement)) throw { message: 'canvas is not an instance of HTMLCanvasElement', libwarn: true }
    if(options && options.size && typeof options?.size !== 'number') throw { message: 'options.size is not a number', libwarn: true }

    const context = canvas.getContext('2d')
    const size = options?.size || 10
    const repeatX = Math.ceil(canvas.width/size)
    const repeatY = Math.ceil(canvas.height/size)
    options = options || {}
    options.primaryColor = options?.primaryColor || '#EDEDED'
    options.secondaryColor = options?.secondaryColor || '#C6C6C6'

    for(let y = 0; y < repeatY; y++) {
      for(let x = 0; x < repeatX; x++) {
        context.fillStyle = x % 2 === y % 2 ? options.primaryColor : options.secondaryColor
        let posX = x*size
        let posY = y*size
        if(options.centered) {
          let extraWidth = repeatX*size - canvas.width
          let extraHeight = repeatY*size - canvas.height
          posX -= extraWidth/2
          posY -= extraHeight/2
        }
        context.fillRect(posX, posY, size, size)
      }
    }

  } catch(e) {
    if(e.libwarn && !options?.ignoreWarnings) throw `${e.message}, pass ignoreWarnings: true in options to ignore this warning`
    else throw e
  }
}
