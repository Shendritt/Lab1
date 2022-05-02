
//crud
import React, { Component } from 'react';


class Doctor extends Component {

  constructor(props){   
    super(props);
    this.state={
      title: 'Doctors data',
      act: 0,
      index: '',
      datas: []
    }
  } 

  componentDidMount(){
    this.refs.name.focus();
  }

  fSubmit = (e) =>{
    e.preventDefault();
    console.log('try');

    let datas = this.state.datas;
    let name = this.refs.name.value;
    let surname = this.refs.surname.value;
    let phone = this.refs.phone.value;
    let address = this.refs.address.value;
    let email = this.refs.email.value;

    if(this.state.act === 0){   //new
      let data = {
        name, address, surname, phone, email
      }
      datas.push(data);
    
    }else{                      //update
      let index = this.state.index;
      datas[index].name = name;
      datas[index].surname = surname;
      datas[index].phone = phone;
      datas[index].address = address;
      datas[index].email = email;
     
    }    

    this.setState({
      datas: datas,
      act: 0
    });

    this.refs.myForm.reset();
    this.refs.name.focus();
  }

  fRemove = (i) => {
    let datas = this.state.datas;
    datas.splice(i,1);
    this.setState({
      datas: datas
    });

    this.refs.myForm.reset();
    this.refs.name.focus();
  }

  fEdit = (i) => {
    let data = this.state.datas[i];
    this.refs.name.value = data.name;
    this.refs.surname.value = data.surname;
    this.refs.phone.value = data.phone;
    this.refs.address.value = data.address;
    this.refs.email.value = data.email;
   

    this.setState({
      act: 1,
      index: i
    });

    this.refs.name.focus();
  }  

  render() {
    let datas = this.state.datas;
    return (
      <div className="App">
        <h2>{this.state.title}</h2>
        <form ref="myForm" className="myForm">
          <input type="text" ref="name" placeholder="Enter name" className="formField" />
          <input type="text" ref="surname" placeholder="Enter surname" className="formField" />
          <input type="text" ref="phone" placeholder="Enter phone number" className="formField" />
          <input type="text" ref="address" placeholder="Enter address" className="formField" />
          <input type="text" ref="email" placeholder="Enter email" className="formField" />
          <button onClick={(e)=>this.fSubmit(e)} className="myButton">Submit </button>
        </form>
        <pre>
          {datas.map((data, i) =>
            <li key={i} className="myList">
              {i+1}. {data.name}, {data.surname}, {data.phone}, {data.address}, {data.email}
              <button onClick={()=>this.fRemove(i)} className="myListButton">remove </button>
              <button onClick={()=>this.fEdit(i)} className="myListButton">edit </button>
            </li>
          )}
        </pre>
      </div>
    );
  }
}

export default Doctor;
