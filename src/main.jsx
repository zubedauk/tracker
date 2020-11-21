import React from 'react'
// { useEffect,useState }

function main(prop){
    return(
        <div id="container">
        <Header />
        <hr></hr>
        <Main Data={prop.db} />
        <hr></hr>
        <Footer />
        </div>
    )
}
function Footer(){
    return( <footer id="footer">
        <a href="www.google.com">Contact us</a>
        <a href="www.google.com">FaceBook</a>
        <a href="www.google.com">Insta</a>
    </footer>
    )
}
function Main(prop){
//const [data,setData]=useState([]);
// useEffect(
//     function(){
//         fetch('https://ontrack-team3.herokuapp.com/students')
//         .then(function(obj){
//             return obj.json();
//         })
//         .then(function(db){
//             console.log("zz");
//             console.log(db);
//             setData(db);
//             console.log(data);
//         })
//         .then(function(error) {
//             console.log(error);
//           });
//     }
    

// )
return(
<main id="main">
<form class="form-inline my-2 my-lg-0" id="frmAdd">
        <button type="button" class="btn btn-success">Add New</button>                      
</form>
<table class="table table-striped table-bordered" >
  <caption>List of users</caption>
  <thead>
    <tr>
      <th scope="col" style={{fontSize:'1.2rem'}}>#</th>
      <th scope="col" style={{fontSize:'1.2rem'}} >Name</th>
      <th scope="col" style={{fontSize:'1.2rem'}}>Photo</th>
      <th scope="col" style={{fontSize:'1.2rem'}}>Edu Buddy</th>
      <th scope="col" style={{fontSize:'1.2rem'}}>PD Buddy</th>
      <th scope="col" style={{fontSize:'1.2rem'}}>GitHub</th>
      <th scope="col" style={{fontSize:'1.2rem'}}>English Test</th>
      <th scope="col" style={{fontSize:'1.2rem'}}>Language Support</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
   
    {
   prop.Data.map(function(obj){
        return(<>
            <tr>
            <th scope="row">{obj.id}</th>
                <td style={{fontSize:'1.2rem'}}>{obj.name}</td>
                <td style={{fontSize:'1.2rem'}}>{obj.photo}</td>
                <td style={{fontSize:'1.2rem'}}>{obj.pdBuddy}</td>
                <td>{obj.eduBuddy}</td>
                <td style={{fontSize:'1.2rem'}}>{obj.gitHub}</td>
                <td style={{fontSize:'1.2rem'}}>{obj.englishTest}</td>
                <td style={{fontSize:'1.2rem'}}>{obj.languageSupport}</td>
                <td>
                <form class="form-inline my-2 my-lg-0" name="frmProfile">
                    <button style={{fontSize:'1.2rem'}} class="btn btn-outline-success my-2 my-sm-0" type="submit" id="btnProfile">Profile</button>
                </form>
                </td>

            </tr>
            </>)
    })
     }
  
   
  </tbody>
</table>
</main>
)
}
function Header(){
return(
    <header id="header">
            <div id="logo-login">
                <img alt="logo" id="logo" src="data:image/png;base64,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"/>
            </div>
          
           <div id="nav-search">
                <nav class="nav navbar-light bg-light" id="nav">
                    <a href="www.google.com" class="btn btn-outline-success btnSize">Students</a>
                    <a href="www.google.com" class="btn btn-outline-success btnSize">Attendance</a>
                    <a href="www.google.com" class="btn btn-outline-success btnSize">Education</a>
                    <a href="www.google.com" class="btn btn-outline-success btnSize">PD</a>
             
                </nav>
                
               <div  id="search">
               {/* class="nav-item active" */}
                    <li >
                        <a class="nav-link" href="www.google" id="home">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                    <select name="location" id="location">
                        <option value="London">Location</option>
                        <option value="London">London</option>
                        <option value="Birmingham">Birmingham</option>
                        <option value="Machester">Machester</option>
                      
                    </select>
                    </li>
                    <li class="nav-item">
                    <select name="class" id="class">
                        <option value="Class1">Class</option>
                        <option value="Class1">Class1</option>
                        <option value="Class2">Class2</option>
                        <option value="Class3">Class3</option>
                        
                    </select>
                    </li>
                    <li>
                        <form class="form-inline my-2 my-lg-0" name="frmSearch">
                            <input style={{fontSize:'1.4rem',width:'10rem'}} class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button style={{fontSize:'1.4rem'}} class="btn btn-outline-success my-2 my-sm-0" type="submit" id="btnSearch">Search</button>
                        </form>
                    </li>
                </div>
           </div>   
           <div>
           <button type="button" class="btn btn-primary" id="login">Login</button>

           </div>
        </header>
)

}
export default main;