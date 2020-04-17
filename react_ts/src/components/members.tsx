import * as React from 'react'
import MemberHeader from './memberHeader'
import { memberAPI } from '../api/member'
import { MemberEntity } from '../model';
import MemberRow from './memberRow'
interface Props {}
interface State {
  members: MemberEntity[]
}
export class MembersPage extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      members: []
    }
  }

  public componentDidMount() {
    memberAPI
      .fetchMembers()
      .then((members) => {
        console.log(members)
        this.setState({
          members
        })
      })
  }

  public render() {
    return (
      <div>
        {/* 123 */}
        <h2>Members Page</h2>
        <table className="table">
          <thead>
            <MemberHeader />
          </thead>
          <tbody>
            {
              this.state.members.map((member) => {
                return (
                  <div>
                    <MemberRow
                    key={member.id}
                    member={member}
                  />
                  </div>
                )
              })
            }
          </tbody>
        </table>
      </div>
    )
  }
}