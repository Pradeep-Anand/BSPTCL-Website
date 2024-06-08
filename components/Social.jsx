import React from 'react'
function Social(){
    return (
        <div className="social absolute top-5 right-80 flex  w-36 h-10 items-center justify-center backdrop-blur-lg rounded-lg bg-red-500">
            <span><a href="https://twitter.com/seva_bsptcl"><img className="size-8 mr-5 nightowl-light" src="/src/assets/twitter.png"></img></a></span>
            <span><a href="https://play.google.com/store/apps/details?id=bih.nic.in.app.transmission"><img className="size-8 mr-5 nightowl-light" src="/src/assets/playstore.png"></img></a></span>
            <span><a href="https://www.bsptcl.in/PhoneDirectory.aspx"><img className="size-8 nightowl-light" src="/src/assets/phonebook.png"></img></a></span>
        </div>
    )
}
export default Social