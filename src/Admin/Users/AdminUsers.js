import React from 'react'
import Sidebar from '../Sidebar'

const AdminUsers = () => {
  return (
    <div className="d-flex" id="wrapper">
        <div>
            <Sidebar/>
        </div>

        <div id="page-content-wrapper" style={{}}>
   

   <div className="container-fluid px-4" style={{ marginTop: '13%'}}>
   

       <div className="row my-5">
           <h3 className="fs-4 mb-3">Users</h3>
           <div className="col"  style={{boxShadow: "2px 2px 10px 0 rgba(22, 22, 26, 0.22)"}}>
               <table className="table bg-white rounded shadow-sm  table-hover">
                   <thead>
                       <tr>
                       
                           <th scope="col" width="50">#</th>
                           <th scope="col">Name</th>
                           <th scope="col">Price</th>
                           <th scope="col">Description</th>
                       </tr>
                   </thead>
                   <tbody>

                   {/* {rooms.map((room) => ( */}
                    <tr>
                           <th scope="row">1</th>
                           <td>title</td>
                           <td>.</td>
                           <td>kkkk</td>
                       </tr>
{/* ))} */}
                      
                     
                   </tbody>
               </table>
           </div>
       </div>

   </div>
</div>
    </div>
  )
}

export default AdminUsers