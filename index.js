const { addItemToList } = require("./lib/store");

// Contoh: Menambahkan item ke list grup
async function handleAddItem(msg, groupID, item) {
  await addItemToList(groupID, item);
  msg.reply(`✅ "${item}" berhasil ditambahkan ke daftar grup!`);
}

// Contoh: Menampilkan list grup
async function handleGetList(msg, groupID) {
  const list = await getList(groupID);
  if (list.length === 0) {
    msg.reply("📭 Daftar masih kosong!");
  } else {
    msg.reply(`📋 Daftar grup:\n${list.join("\n")}`);
  }
}

const {
   spawn
} = require('child_process')
const path = require('path')

function start() {
   let args = [path.join(__dirname, 'alpha.js'), ...process.argv.slice(2)]
   console.log([process.argv[0], ...args].join('\n'))
   let p = spawn(process.argv[0], args, {
         stdio: ['inherit', 'inherit', 'inherit', 'ipc']
      })
      .on('message', data => {
         if (data == 'reset') {
            console.log('Restarting Bot...')
            p.kill()
            start()
            delete p
         }
      })
      .on('exit', code => {
         console.error('Exited with code:', code)
         if (code == '.' || code == 1 || code == 0 || code == null) start()
      })
}
start()
