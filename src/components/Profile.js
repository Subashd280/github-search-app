import React,{Component} from 'react';

  //userData

class Profile extends Component  {

  

    render() {

       let userdata = this.props.userData;
       let followers = `${userdata.homeURL}/followers`;
       let following = `${userdata.homeURL}/following`;
       let public_repos = `${userdata.homeURL}/repositories`;
   
   if(userdata.message === "Not Found"){
      return ( 
        <div className="notfound">
          console.log("Are you sure, for whom your are looking for");
           <h2>heyyyyyyy</h2>
           <p>Are you sure, for whom you are looking for ???</p>
        </div>
     );
   }
     
     else {
         return ( 
        <section className="github-profile">
           <div className="github-profile-info">
             <a href={userdata.homeurl} target="_blank" title={userdata.name || userdata.username}><img src = {userdata.avatar_url} alt = {userdata.avatar_url} /></a>
             <h2><a href={userdata.homeurl} title={userdata.username}target="_blank">{userdata.name|| userdata.username}</a></h2>
             <h3>{userdata.location}</h3>
           </div>
           <div className="github-profile-state">
             <ul>
               <li>
                 <a href={followers} target="_blank" title="Number of followers"><i>{userdata.followers}</i><span>Followers</span></a>
               </li>
                <li>
                 <a href={following} target="_blank" title="Number of following"><i>{userdata.following}</i><span>Following</span></a>
               </li>
                <li>
                 <a href={public_repos} target="_blank" title="Number of repos_url"><i>{userdata.public_repos}</i><span>Repositories</span></a>
               </li>
             </ul>
           </div>
        </section>
     );
     }
    }
}
export default Profile;