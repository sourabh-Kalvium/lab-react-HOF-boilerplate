import React, { Component } from 'react'

export default class HigherOrderComponent extends Component {
   
    constructor(){
        super();
        this.state = {
            userData: [
                { id: '1', name: 'Joe', user_type: 'Developer', age:31, years:11 },
                { id: '2', name: 'Hill', user_type: 'Designer', age:26, years:4 },
                { id: '3', name: 'John', user_type: 'Teacher', age:24,years: 2},
                { id: '4', name: 'Sam', user_type: 'Entreprenuer', age:58,years:25},
                { id: '5', name: 'Jack', user_type: 'Designer', age:43, years: 18}

            ]
        }
   }

   renderItems =()=>{
      let data = this.state.userData
      let mapRows =data.map((item)=>(
         <React.Fragment key={item.id}>
           <li className="list-elements">
             <span>Id: {item.id}</span>
             <span>Name : {item.name}</span>
             <span>User Type: {item.user_type}</span>    
           </li>
        </React.Fragment>
      ))

      return mapRows
   }

   filterData=()=>{
      let data = this.state.userData
      let filtered =data.filter((item)=>item.user_type==this.props.type).map((item)=>(
        <React.Fragment key={item.id}>
        <li className="list-elements">
          <span>Id: {item.id}</span>
          <span>Name : {item.name}</span>
          <span>User Type: {item.user_type}</span>    
        </li>
       </React.Fragment>
      ))
      
      return filtered
   }

   filterByLetter=()=>{
    let data = this.state.userData
    let filtered =data.filter((item)=>item.name[0]==this.props.firstLetter).map((item)=>(
      <React.Fragment key={item.id}>
      <li className="list-elements">
        <span>Id: {item.id}</span>
        <span>Name : {item.name}</span>
        <span>User Type: {item.user_type}</span>    
      </li>
     </React.Fragment>
    ))
    return filtered
   }


   filterByage=()=>{
    let data = this.state.userData
    let filtered =data.filter((item)=>item.age>this.props.minAge && item.age<this.props.maxAge).map((item)=>(
      <React.Fragment key={item.id}>
      <li className="list-elements">
        <span>Id: {item.id}</span>
        <span>Name : {item.name}</span>
        <span>User Type: {item.user_type}</span>    
      </li>
     </React.Fragment>
    ))
    return filtered
   }

   totalExperience=()=>{
    let data = this.state.userData
    let reducedData =data.reduce((accumulator,current)=>{
        if(current.user_type=="Designer"){
            accumulator+=current.years
        }
        return accumulator
    },0)
    return reducedData
   }





   
  render() {
    return (
      <> 
         <h1>Display all items</h1>
         <div className="display-box">
         <ul>{this.renderItems()} </ul>
         </div>

         <h1>LIST ALL DATA BASED ON USERTYPE</h1>
         <div className="">
         <ul>{this.filterData()} </ul>
         </div>

         <h1>FILTER ALL DATA STARTING WITH THE LETTER `J`</h1>
         <div className="">
         <ul>{this.filterByLetter()}</ul>
         </div>

         <h1>FILTER DATA BASED ON AGE</h1>
         <div className="">
         <ul>{this.filterByage()}</ul>
         </div>

         <h1>FIND THE TOTAL EXPERIENCE OF THE DESIGNERS</h1>
         <div className="">
         <ul className='totalYear'>{this.totalExperience()}</ul>
         </div>
          
      </>
    )
  }
  
}
