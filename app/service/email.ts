import { Service } from 'egg'

import { createTransport } from 'nodemailer'

class EmailService extends Service {
    /**
     * 发送邮件
     * @param to 发件人
     * @param subject 主题
     * @returns boolean
     */
    async send(to, html = "", subject = "星星社区") {
        const { user } = this.config.email.auth
        // 获取邮件配置 config\config.local.js
        const transporter = createTransport({ ...this.config.email })
        // 邮件内容
        const mailOptions = {
            from: `星星社区 <${user}>`, to, subject, html
        }
        // 发送邮件
        try {
            await transporter.sendMail(mailOptions);
            return true
        } catch (error) {
            console.log(error);
            return false
        }
    }
}

export default EmailService