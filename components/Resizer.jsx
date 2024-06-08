import React from 'react'
function Resizer(){
    return (
        <div class="resize inline-block relative top-0 right-32">
            <span className="btn  btn-primary mr-3 increase " onClick={increase} >A+ </span>
            <span class="btn btn-primary mr-3">A</span>
            <span class="btn btn-primary">A-</span>
        </div>
    )
}
export default Resizer