const qrcode = require('qrcode')

exports.formatData = (id, price) => {
    const qrCodeText = `Product ID: ${id}, Price: $${price}`
    return qrCodeText
}

exports.generateQrCode = async (qrCodeText) => {
  const options = {
    errorCorrectionLevel: 'M',
    type: 'image/png',
    margin: 1
  }

  const QrCodeBuffer = await qrcode.toBuffer(qrCodeText, options)
  return QrCodeBuffer
}