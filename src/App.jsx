import React from 'react'

function App() {

  let data = [{
    tick:"&#10003;",
    title:"FREE",
    price:"$0/month",
    user:"Single User",
    storage:"50GB",
    public:"Unlimited public projects",
    Access:"Community Access",
    private:"Unlimited private projects",
    support:"Dedicated phone support",
    domain:"free subdomain",
    report:"Monthly status Reports",
  },
  {
    title:"PLUS",
    price:"$9/month",
    user:"5 Users",
    storage:"50GB",
    public:"Unlimited public projects",
    Access:"Community Access",
    private:"Unlimited private projects",
    support:"Dedicated phone support",
    domain:"free subdomain",
    report:"Monthly status Reports",
  },
  {
    title:"PRO",
    price:"$49/month",
    user:"Unlimited Users",
    storage:"50GB",
    public:"Unlimited public projects",
    Access:"Community Access",
    private:"Unlimited private projects",
    support:"Dedicated phone support",
    domain:"free subdomain",
    report:"Monthly status Reports",
  }]

  // let data1 = [ &#10003; , &#10005;]
  return <>
  <div className="container">

{/* <!-- Page Heading --> */}


<div className="row">
  {
     data.map((e)=>{
       return <div className="col-lg-4 col-sm-6 mb-4">
              <div className="card h-100">
              <div className="card-body">
              <p className="card-title" id="title">{e.title}</p>
              <h4 className="card-text">{e.price}</h4>
              <p className="card-text"> {e.user}</p>
              <p className="card-text"> {e.storage}</p>
              <p className="card-text"> {e.public}</p>
              <p className="card-text"> {e.Access}</p>
              <p className="card-text">{e.private}</p>
              <p className="card-text">{e.support}</p>
              <p className="card-text">{e.domain}</p>
              <p className="card-text">{e.report}</p>
              <button type="button" class="btn btn-primary btn-lg">BUTTON</button>
             </div>
             </div>
             </div>
     })
  }
</div>
</div>
  </>
}

export default App