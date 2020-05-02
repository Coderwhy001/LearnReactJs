import { Avatar, Divider } from 'antd'
import { GithubOutlined, QqOutlined, WechatOutlined } from '@ant-design/icons';
import '../public/style/components/author.css'
const Author = () => {
  return (
    <div className="author-div comm-box">
        <div>
          <Avatar size={100} src="http://img1.imgtn.bdimg.com/it/u=2421033482,4116815793&fm=11&gp=0.jpg" />
        </div>
        <div className="author-introduction">
            大三在校学生，专注于web和移动前端开发。希望能进入大厂找到好的工作>
            <Divider>社交账号</Divider>
            <Avatar size={28} icon={<GithubOutlined />} className="account" />
            <Avatar size={28} icon={<QqOutlined />} className="account" />
            <Avatar size={28} icon={<WechatOutlined />} className="account" />
        </div>
    </div>
  )
}

export default Author