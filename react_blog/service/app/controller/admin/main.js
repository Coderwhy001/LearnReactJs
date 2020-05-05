'use strict'
const Controller = require('egg').Controller
class MainController extends Controller {
  async index() {
    this.ctx.body = "hi admin"
  }
  async checkLogin() {
    let userName = this.ctx.request.body.userName
    let password = this.ctx.request.body.password
    const sql = " SELECT userName FROM admin_user WHERE userName = '" + userName +
      "' AND password = '" + password + "'"

    const res = await this.app.mysql.query(sql)
    if (res.length > 0) {
      //登录成功,进行session缓存
      let openId = new Date().getTime()
      this.ctx.session.openId = { 'openId': openId }
      this.ctx.body = { 'data': '登录成功', 'openId': openId }

    } else {
      this.ctx.body = { data: '登录失败' }
    }
  }
  async getTypeInfo () {
    const resType = await this.app.mysql.select('type')
    this.ctx.body = {data: resType}
  }

  async addArticle () {
    let tmpArticle = this.ctx.request.body
    const result = await this.app.mysql.insert('article', tmpArticle)
    const insertSuccess = result.affectedRows === 1
    const insertId = result.insertId

    this.ctx.body = {
      isSuccess: insertSuccess,
      insertId: insertId
    }
  }

  async updateArticle() {
    let tempArticle = this.ctx.request.body

    const result = await this.app.mysql.update('article', tempArticle)
    const updateSuccess = result.affectedRows === 1
    this.ctx.body = {
      isSuccess: updateSuccess
    }
  }
}
module.exports = MainController