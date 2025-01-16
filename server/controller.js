import { formatData, generateQrCode } from './service.js'

export async function generateQR(req,res){
  try {
    const { id, price } = req.body;
    //console.log(id, price)
    const qrCodeText = formatData(id, price)
    const qrCodeBuffer = await generateQrCode(qrCodeText)
    res.setHeader('Content-Disposition', 'attachment; filename=qrcode.png')
    res.type('image/png').send(qrCodeBuffer)
  } catch (error) {
    console.log(error)
    res.status(500).send({error: 'Internal Server Error'})
  }
}