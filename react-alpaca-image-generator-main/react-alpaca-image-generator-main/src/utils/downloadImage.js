
import { toPng } from 'html-to-image'
import download from 'downloadjs'
export const downloadImage = () => {
    const alpacaCanvasNode = document.getElementById('alpaca')
    toPng(alpacaCanvasNode).then(dataUrl => {
        download(dataUrl, 'my-alpaca.png')
    })
}