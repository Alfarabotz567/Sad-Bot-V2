var handler = async(m, { conn, text, usedPrefix, command }) => {

var str = `*https://github.com/Alfarabotz567*\nSubscribe Untuk Mengetahui Update Selanjutnya:https://youtube.com/channel/UCaFh82MyrVgcgIvJxvTA39w\nSilahkan follow github saya dibawah ,Terimakasih`
conn.sendButtonDoc(m.chat, str, wm, 'Thanks','Bilek', ftextt, m)
}
handler.command = handler.help = ['sc']
handler.tags = ['info']
    
module.exports = handler
