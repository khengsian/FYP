import React,{ Component } from 'react';
import { Link } from 'react-router-dom';

class Navigation extends Component{
    render(){
        return(
            <div className='navbar'>
                <Link to ='/' className ="heading" class="navigatorMenu">HOME </Link>
                <Link to ='/CandidateDetails' class="navigatorMenu">CANDIDATE </Link>
                <Link to ='/RequestVoter' class="navigatorMenu">APPLY FOR VOTER </Link>
                <Link to ='/Vote' class="navigatorMenuEnd">VOTE </Link>
            </div>
        );
        
    }

}

export default Navigation;