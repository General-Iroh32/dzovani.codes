import "./topbar.scss"
export default function topbar() {
    return (
        <div className="nav-container">
            
            
                <img src={process.env.PUBLIC_URL+"/images/unknown.png"} alt="Girl in a jacket" width="100%" height="100%"/>
               
           
        <div className="nav-icon">
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
        </div>
        
        <nav className="nav-main">
            <div className="box-wrapper">
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
            </div>
            </nav>
            </div>
    )
}
