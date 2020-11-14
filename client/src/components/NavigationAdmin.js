import React,{ Component } from 'react';
import { Link } from 'react-router-dom';

class NavigationAdmin extends Component {
    
    render(){
        var link = document.createElement('link');
        link.href = 'src/App.css';
        return(
            <div className='navbar'>
                <label className="Admin" class="label">ADMIN</label>
                <br/>
                <br/>
                <Link to='/' className ="heading" class= "navigatorMenu">HOME</Link>
                <Link to= 'CandidateDetails' class= "navigatorMenu">CANDIDATES</Link>
                <Link to='/RequestVoter' class= "navigatorMenu">APPLY FOR VOTER</Link>
                <Link to='/Vote' class= "navigatorMenu">VOTE</Link>
                <Link to='/VerifyVoter' class= "navigatorMenu">VERIFY VOTER</Link>
                <Link to='/AddCandidate'class= "navigatorMenu">ADD CANDIDATE</Link>
                <Link to='/Result'class= "navigatorMenu">RESULTS</Link>
                <Link to='/Admin'class= "navigatorMenuEnd">START/END</Link>
            </div>
        );
    }
}

export default NavigationAdmin;