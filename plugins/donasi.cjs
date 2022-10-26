var handler = async m => m.reply(`
╭─「 Donasi 」
│ • TELKOMSEL [081385423329]
│ • DANA [089531704997]
│ • OVO [-]
│ • GOPAY [-]
│ • SHOPPY PAY [-]
│ • Saweria [https://saweria.co/Irfaan567]
╰────
╭─「 Hubungi 」
│ > Ingin Sewa bot? wa.me/6285624823115
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
