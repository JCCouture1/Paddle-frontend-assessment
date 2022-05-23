import React, { useState } from 'react';
import "../styles/Github.css";
import axios from "axios";

function Github() {

  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);

  const getRecipes = (e) => {
      axios.get(`https://api.github.com/users/${query}`)
      .then(res => {
          console.log(res.data)
          setRecipes(res.data)
      }).catch(err => {
          console.log(err)
      })
  }
  const onSubmit = (e) => {
      e.preventDefault();
      getRecipes();
     
  }

  return (
    <div>
       <form onSubmit={onSubmit}>
            <div className="main-content">
                 <h1>list Of Users</h1>

                  <input className='main-input' value={query}
                  type="text" placeholder='Enter Github Username'
                  onChange={(e) => setQuery(e.target.value)}/>

                  <button type='submit' className='main-button'>Check Status</button>
            </div>
            
            <div className="repos">
              <img className='repo-img' src={recipes.avatar_url} alt="" />
              <h1 className='repo-h1'>{recipes.name}</h1>
              <p className='repo-p'>{recipes.bio}</p>
              <h2 className='repo-h1'>{recipes.public_gists}</h2>
              <h2 className='repo-h1'>{recipes.public_repos}</h2>
            </div>
        </form>
    </div>
  )
}

export default Github
