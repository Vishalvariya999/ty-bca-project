import React from 'react'

const MainDashBoard = () => {
  return (
    <>
            <div className="main">

<div className="searchbar2">
    <input type="text"
        name=""
        id=""
        placeholder="Search" />
    <div className="searchbtn">
    <img src=
"https://media.geeksforgeeks.org/wp-content/uploads/20221210180758/Untitled-design-(28).png"
            className="icn srchicn"
            alt="search-button" />
    </div>
</div>

<div className="box-container">

    <div className="box box1">
        <div className="text">
            <h2 className="topic-heading">60.5k</h2>
            <h2 className="topic">Company View</h2>
        </div>

        <img src=
"https://media.geeksforgeeks.org/wp-content/uploads/20221210184645/Untitled-design-(31).png"
            alt="Views" />
    </div>

    <div className="box box2">
        <div className="text">
            <h2 className="topic-heading">150</h2>
            <h2 className="topic">Projects</h2>
        </div>

        <img src=
"https://media.geeksforgeeks.org/wp-content/uploads/20221210185030/14.png"
            alt="likes" />
    </div>

    <div className="box box3">
        <div className="text">
            <h2 className="topic-heading">320</h2>
            <h2 className="topic">Employess</h2>
        </div>

        <img src=
"https://media.geeksforgeeks.org/wp-content/uploads/20221210184645/Untitled-design-(32).png"
            alt="comments" />
    </div>
</div>
<div className="report-container">
    <div className="report-header">
        <h1 className="recent-Articles">Employes List</h1>
        <button className="view">View All</button>
    </div>
    <div className="report-body">
       
    </div>
</div>
</div>
    </>
  )
}

export default MainDashBoard