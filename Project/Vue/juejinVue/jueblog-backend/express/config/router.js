const userRouter = require('../router/users.js')
const articlesRouter = require('../router/articles.js')

const praisesRouter = require('../router/praises.js')
const commentsRouter = require('../router/comments.js')
const shortmsgsRouter = require('../router/shortmsgs.js')
const messagesRouter = require('../router/messages.js')
const followsRouter = require('../router/follows.js')


const router = app => {
  app.use('/users', userRouter)
  app.use('/articles', articlesRouter)
  app.use('/praises', praisesRouter)
  app.use('/comments', commentsRouter)
  app.use('/stmsgs', shortmsgsRouter)
  app.use('/messages', messagesRouter)
  app.use('/follows', followsRouter)
}

module.exports = router