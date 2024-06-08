import React from "react";
import Header from "./Header";
import Navbar from "./Navbar"

function Admin() {
  return (
    <div>
      <div className=" bg-gray-950">
        <Header />
        <Navbar/>
      </div>
      <div className=" justify-center items-center">
        <h1 className="text-center m-3 text-2xl">Admin Dashboard</h1>
        <h1 className=" m-5 text-xl">Add Notice Board</h1>
        <div className=" items-center flex justify-center m-10">
        <form className="" action="127.0.0.1" method="post">
          <div>
          <label for="dept" className=" font-bold text-lg">Department:</label>
          <select name="department" id="dept" className=" bg-slate-500 ml-5 text-lg">
          <option value="dept">--Select Department--</option>
            <option value="Human Resource and Administration">Human Resource and Administration</option>
            <option value="I.T.">I.T.</option>
            <option value="Inter State">Inter State</option>
            <option value="Power Management Cell">Power Management Cell</option>
            <option value="Project and Planning">Project and Planning</option>
            <option value="SLDC">SLDC</option>
            <option value="Store and Material">Store and Material</option>
            <option value="STU">STU</option>
            <option value="Telecom">Telecom</option>
            <option value="Training">Training</option>
            <option value="Transmission (O and M)">Transmission (O and M)</option>
            <option value="ULDC">ULDC</option>

          </select>
          </div>
          <br/>
          <div className="">
            <label for="head" className ="font-bold text-lg" >Headline:</label>
          <input type="text" name="headline" id="head" className="bg-slate-500 ml-5"></input></div>
         
          <br/>
          <div>
          <label for="issue" className="font-bold text-lg">Issue Date:</label>
          <input name="date" id="issue" type='date' className="ml-5 bg-slate-500 "></input>
          </div>
          <br/>
          <div>
            <label for="doc" className="font-bold text-lg">Upload Document:</label>
          <input name="document" id="doc" type="file" className="ml-5 bg-slate-500"></input>
          </div>
          <br/>
          <div>
            <label for="det" className="font-bold text-lg">Details:</label>
            <input name="detail" id="det" type="text" className="ml-5 bg-slate-500"></input>
          </div>
          <br/>
          <div className="btn btn-primary inline-block mr-5">
          <input type="submit" className=""></input>
          </div>
          <div className="inline-block ml-5 btn btn-secondary">
            <input name="" type="reset" className=""></input>
          </div>
          
        </form>
        </div>
        
      </div>
    </div>
  );
}
export default Admin;
