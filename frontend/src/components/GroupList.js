import React from 'react'

const GroupList = () => {
  return (
    <div>
      <table className="table my-3 border">
                <thead> 
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">GROUP NAME</th>
                        {/* <th scope="col">G</th> */}
                        <th scope="col">ACTION</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        </th>
                        <td>Group-1</td>
                        {/* <td>Otto</td> */}
                        <td>
                        <button type="button" class="btn btn-light mx-2">Edit</button>
                        <button type="button" class="btn btn-danger mx-2">Remove</button>
                        </td>
                    </tr>
                </tbody>
            </table>
    </div>
  )
}

export default GroupList
