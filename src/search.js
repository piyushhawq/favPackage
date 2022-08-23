// import { render } from '@testing-library/react';
import React,{Component} from 'react';

class Search extends Component{
    constructor()
    {
        super()
        this.state={
            searchData:[]
        }
    }


search(key) {
    console.warn(key)
    fetch("https://api.npms.io/v2/search?q="+key).then((data)=>{
        data.json().then((resp)=>{
            console.warn("resp",resp)
            this.setState((prev)=>{
            //    prev.push{resp.results};
               return resp.results
            })
            console.log(this.searchData)
        })
    })
}


    render(){
    return (
     <div>
        <h1>Search</h1>
        <input type ="text" onChange={(event)=>this.search(event.target.value)}/>
        <div>
            {
               this.state.searchData?
               <div>
                {
                    this.state.searchData.map((item)=>
                    <div >{item.name}</div>
                       )
                }
               </div>
               :"" 
            }
        </div>
      </div>
    );
  }
}
  export default Search;
  