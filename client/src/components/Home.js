import React, { Component } from "react";
import MasoomContract from "../contracts/MasoomContract.json";
import getWeb3 from "../getWeb3";

// import "../CandidateList.css";
import NavigationAdmin from './NavigationAdmin';
import Navigation from './Navigation';
//import Image from '../../public/image/';
// document.body.style.backgroundColor = "#f3f3f3";
// document.body.style.backgroundImage = "url('image/Mobile_voting.jpg')";
class Home extends Component {
  constructor(props){
    super(props)
    this.state = { 
    MasoomInstance: undefined,
    account:null,
    web3: null,
    isOwner:false,
  }
     //document.body.style.backgroundImage = "url('../Mobile_voting.jpg')";
    //document.body.style.backgroundColor = "red";
}
  

  componentDidMount = async () => {
    if(!window.location.hash){
      window.location = window.location + '#loaded';
      window.location.reload();
      }
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();

      // Get the contract instance.
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = MasoomContract.networks[networkId];
      const instance = new web3.eth.Contract(
        MasoomContract.abi,
        deployedNetwork && deployedNetwork.address,
      );

      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.setState({ MasoomInstance: instance, web3: web3, account: accounts[0]});
      const owner = await this.state.MasoomInstance.methods.getOwner().call();
      if(this.state.account === owner){
        this.setState({isOwner : true});
      }
      let start=await this.state.MasoomInstance.methods.getStart().call();
      let end=await this.state.MasoomInstance.methods.getEnd().call();
      this.setState({start : start, end : end});
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  };


  render() {
    if(!this.state.web3){
      return (
         <div class="body">
      <div className="CandidateDetails">
        <div className="CandidateDetails-title">
          <h1>
          Loading Web3, accounts, and contract...
          Please login with metamask if you haven't login
          </h1>
          </div>
          {this.state.isOwner ? <Navigation /> : <Navigation />}
          </div>
          </div>
      );
    }
    // if(this.state.account!=null){
    return(
      <html>
      <body class="body">
      <div className="App">
        
        <div className="CandidateDetails">
          <div className="CandidateDetails-little">
            <h1>
              ADMIN PORTAL
            </h1>
        </div>
      </div>
        {this.state.isOwner ? <NavigationAdmin /> : <Navigation />}

        <div className="home">
          <br/>
          <br/>
            Vote for your country great future!!
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <div>

            </div>
        </div>
      </div>
      
      </body>
      </html>
    );
  // }
  // else{
  //   window.location.href = "http://www.google.com";
  // } 
    //throw"You have not login yet, please login using metamask.";
  }
}

export default Home;
