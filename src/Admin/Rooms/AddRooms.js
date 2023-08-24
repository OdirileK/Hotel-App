import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {createRoom} from '../../Redux/roomSlice'
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";


const AddRooms = () => {
const dispatch = useDispatch()
const nav = useNavigate()

  const [input, setInput] = useState({
    title: "",
    price: "",
    maxPeople: "",
    desc: "",
    roomNumber: ""
  })

  const handleSubmit = async (e) => {
    e.preventDefault()

    const data = await axios.post('http://localhost:3000/api/rooms/', input)
      .then(res => {
        alert('Room added')
      })
  
  }


  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      marginTop: '10%',
    

    }}>
    
      <form style={{
        width: '40%'
      }}>
        <div className="form-group">
          <label htmlFor="formGroupExampleInput">Title</label>
          <input
            type="text"
            className="form-control"
           
            onChange={e => setInput({ ...input, title: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label htmlFor="formGroupExampleInput2">Price</label>
          <input
            type="text"
            className="form-control"
           
            onChange={e => setInput({ ...input, price: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="formGroupExampleInput2">Max. people</label>
          <input
            type="text"
            className="form-control"
          
            onChange={e => setInput({ ...input, maxPeople: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="formGroupExampleInput2">Description</label>
          <input
            type="text"
            className="form-control"
           
            onChange={e => setInput({ ...input, desc: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="formGroupExampleInput2">Room number</label>
          <input
            type="text"
            className="form-control"
        
            onChange={e => setInput({ ...input, roomNumber: e.target.value })}
          />
        </div>

        <button style={{marginLeft: '40%', padding: '2%', borderRadius: '10px', backgroundColor: 'blue', marginTop: '5%'}} onClick={handleSubmit}><Link to={'/'} style={{textDecoration: 'none', color: 'white'}}>Submit</Link></button>
      </form>
    </div>
  );
};

export default AddRooms;