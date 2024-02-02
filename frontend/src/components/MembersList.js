import React from 'react'

const MembersList = ({members,handleRemoveMember}) => {
  return (
    <div>
       <table className="table my-3 border">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">NAME</th>
                        <th scope="col">RELATION</th>
                        <th scope="col">ACTION</th>
                    </tr>
                </thead>
                <tbody>
                {members.map((member) => (
            <tr key={member.id}>
                        <th scope="row">
                            <input class="form-check-input" type="checkbox" value={member.id} id="flexCheckDefault" />
                        </th>
                        <td>{member.name}</td>
                        <td>{member.relation}</td>
                        <td>
                            <button type="button" class="btn btn-danger" onClick={() => handleRemoveMember(member.id)}>Remove</button>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
    </div>
  )
}

export default MembersList
