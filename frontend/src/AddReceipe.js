import React from "react"
export default class AddReceipe extends React.Component{
    constructor(props){
      super(props)
      this.state = {title:"none", description:"none", ingredients:[], instruction:[], filname:""}
    }
    handleChange = (event)=>{
      let {target:{name, value}} = event
      if(name=='ingredients' || name=='instruction'){
        this.state[name][this.state[name].length] = value;
        return this.setState({[name]:this.state[name]})
      }
      if(name=='ingredientsBtn' || name=='instructionBtn'){
        return this.state[name].push("")
      }

      this.setState({[name]:value})
    }
    upload = async ()=>{
        await fetch('http://localhost:4000/saveReceipe', {
            method:"POST",
            body:JSON.stringify(this.state),
            headers:{
                'Content-Type':"application/json"
            }
        }).then(()=>window.location='/addReceipe')
    }
    render(){
    return <>
      <label>Title : <input type="text" name="title" onChange={this.handleChange}/></label><br/>
      <label>Description : <input type="text" name="description" onChange={this.handleChange}/></label><br/>
      <label>Ingredients : <input type="text" name="ingredients" onChange={this.handleChange}/> <input type="button" name="ingredientsBtn" value="Add" onChange={this.handleChange}/></label><br/>
      {
        this.state.ingredients&&this.state.ingredients.map(ing=><li>{ing}</li>)
      }
      <label>Instructions : <input type="text" name="instruction"/> <input type="button" value="Add" name="instructionBtn" onChange={this.handleChange}/></label><br/>
      {
        this.state.ingredients&&this.state.ingredients.map(ing=><li>{ing}</li>)
      }
      <label>Thumbnail : <input type="file" name="image"/></label><br/>
      <input type="button" value="Save" onClick={this.upload}/>
      </>
    }
  }