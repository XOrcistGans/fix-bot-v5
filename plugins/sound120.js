import fs from 'fs'
import fetch from 'node-fetch'
let handler  = async (m, { conn, usedPrefix: _p }) => {
    let info = fs.readFileSync('./mp3/soundultah.mp3')

let td = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'

conn.reply(m.chat, info, m, { quoted: fkontak },{ contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: "https://youtube.com/channel/UCWUQQiIXZlni9OF-kXtbNlA",
    mediaType: 2,
    description: "https://youtube.com/channel/UCWUQQiIXZlni9OF-kXtbNlA", 
    title: '𝐗𝐎𝐫𝐜𝐢𝐬𝐭𝐆𝐚𝐧𝐬',
    body: wm,
    thumbnail: thumb,
    sourceUrl: sig  }}})
}
handler.command = ['sound120']
handler.help = ['sound120']
export default handler
