import * as React from 'react';
import { MemberEntity } from '../model';
 class MemberRow extends React.Component<{member: MemberEntity}> {
  constructor(props) {
    super(props)
  }
  // public componentDidMount() {
  //   memberAPI
  //     .fetchMembers()
  //     .then((member) => {
  //       // console.log(member)
  //       this.setState({
  //         member
  //       })
  //     })
  // }
  render() {
    // console.log(this.props.member.avatar_url)
    return (
      <tr>
        <td>
          <img src={this.props.member.avatar_url} alt=""/>
        </td>
        <td>
          {this.props.member.id}
        </td>
        <td>
          {this.props.member.login}
        </td>
      </tr>
    )
  }
}


export default MemberRow;