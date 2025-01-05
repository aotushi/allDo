const mongoose = require('mongoose')
const connect = (req, res, next) => {
  mongoose
    .connect('mongodb://127.0.0.1:27017/juejin_blog', {
      user: 'abc',
      pass: 'abcpwd',
    })
    // .connect(
    //   'mongodb+srv://jioshya:b3Lfcy5nwK5FsrUE@cluster0.2xsu8.mongodb.net/',
    //   {
    //     user: 'jioshya',
    //     pass: 'b3Lfcy5nwK5FsrUE',
    //   })
    .then(() => {
      console.log('数据库连接成功')
      next()
    })
    .catch((err) => {
      console.log('数据库连接失败', err)
      res.status(500).send('数据库连接失败')
    })
}

module.exports = connect


// b3Lfcy5nwK5FsrUE
// jioshya

// mongodb+srv://<db_username>:<db_password>@cluster0.2xsu8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0