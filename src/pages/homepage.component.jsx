import './homepage.style.css'
import Newsletter from "../components/newsletter/newsletter.component";

const HomePage = () => {
    return (
        <div>
            <div className="navcontainer">
                <nav className="navbar fixed-top navbar-light" style={{
                    backgroundColor: '#F3FAF6'
                }}>
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">
                            <img
                                src="/img/sportspadi-logo.png"
                                className="me-2"
                                height="20"
                                alt="MDB Logo"
                                loading="lazy"
                            />
                        </a>
                        <nav aria-label="breadcrumb" style={{
                            marginTop: '1rem',
                            marginRight: '2rem'
                        }}>
                            <ol className="breadcrumb" id="breadcrumb">
                                <li className="breadcrumb-item">
                                    <a href="#playersection" className="breadcruma">Talent</a>
                                </li>
                                <li className="breadcrumb-item">
                                    <a href="#agentsection" id="agentlink">Agent</a>
                                </li>
                            </ol>
                        </nav>
                    </div>
                </nav>
            </div>
            <div className="playersection row align-items-start" id="playersection">
                <div className="col-sm-6">

                    <h1>Find <span  style={{
                        color: '#00a01e'
                    }}> Open Agents</span> and get <span
                        style={{
                            color: '#00a01e'
                        }}>Connected</span></h1>
                    <p>Now you can realize your dream to join and play in top leagues <span style={{
                        display: 'block'
                    }}>and teams in your international destination of choice.</span>
                    </p>
                </div>
                <Newsletter />
            </div>
            <div className="navcontainer" id="agentsection">
                <div className="playersection2 row align-items-start">

                    <div className="col-sm-6">
                        <h1>Find Top<span style={{
                            color: '#00a01e'
                        }}> Verified</span> Local <span
                            style={{
                                color: '#00a01e'
                            }}>Talents!</span></h1>
                        <p>With our verified Sports talent pool, managers
                            & agents can now make an informed decision </p>
                    </div>

                    <Newsletter />
                </div>
            </div>
        </div>
    )
}

export default HomePage;