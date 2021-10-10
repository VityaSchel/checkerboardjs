export default function drawPattern(canvas, options) {
  try {
    if(options !== undefined && typeof options !== 'object') throw { message: 'Options is not an object', libwarn: true }
    if(!HTMLCanvasElement) throw { message: 'HTMLCanvasElement instance not found', libwarn: true }
    if(!canvas) throw { message: 'Canvas not found', libwarn: true }
    if(!(canvas instanceof HTMLCanvasElement)) throw { message: 'canvas is not an instance of HTMLCanvasElement', libwarn: true }
    if(options && options.size && typeof options?.size !== 'number') throw { message: 'options.size is not a number', libwarn: true }

    options = options || {}
    options.size = options?.size || 10
    options.primaryColor = options?.primaryColor || '#EDEDED'
    options.secondaryColor = options?.secondaryColor || '#C6C6C6'

    const context = canvas.getContext('2d')
    const repeatX = Math.ceil(canvas.width / options.size)
    const repeatY = Math.ceil(canvas.height / options.size)

    for(let y = 0; y < repeatY; y++) {
      for(let x = 0; x < repeatX; x++) {
        let posX = x*options.size
        let posY = y*options.size

        if(options.centered) {
          let extraWidth = repeatX*options.size - canvas.width
          let extraHeight = repeatY*options.size - canvas.height
          posX -= extraWidth/2
          posY -= extraHeight/2
        }

        context.fillStyle = x % 2 === y % 2 ? options.primaryColor : options.secondaryColor
        context.fillRect(posX, posY, options.size, options.size)
      }
    }

  } catch(e) {
    if(e.libwarn && !options?.ignoreWarnings) throw `${e.message}, pass ignoreWarnings: true in options to ignore this warning`
    else throw e
  }
}
