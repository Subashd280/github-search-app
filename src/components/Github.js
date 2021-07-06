import React,{Component} from 'react';
import Profile from './Profile';
import Search from './Search';


const URL = 'https://api.github.com/users';

class Github extends Component  {

    constructor (props){
        super(props);
            this.state={
               username: 'subashd280',
               message: 'not found',
               name: '',
               avatar_url: '',
               html_url: '',
               public_repos: '',
               gists_url: '',
               location: '',
               home_url: '',
               followers: '',
               following: '',
               notFound:''
            };
        }


        github(username){
            let finalURL = `${URL}/${username}`;

             fetch(finalURL)
             .then((res) => res.json() )
             .then((data) => {
                 this.setState({
                     username: data.login,
                     name: data.name,
                     avatar_url: data.avatar_url,
                     html_url: data.html_url,
                     public_repos: data.public_repos,
                     gists_url: data.gists_url,
                     location: data.location,
                     home_url: data.home_url,
                     followers: data.followers,
                     following: data.following,
                     notFound: data.message
                 })
             })
             .catch((error) => console.log("There were was an problem in fetching data") )
        }
    
    componentDidMount(){
        this.github(this.state.username);
    }

    render() {
      return ( 
        <div>
            <section id="card">
               <Search searchProfile={this.github.bind(this)}/>
               <Profile userData={this.state}/>
               
            </section>
            
        </div>
       
     );
    }
}
export default Github;