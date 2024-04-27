import React,{ useEffect } from 'react'
import axios from 'axios';

const App = () => {

    const dataToSend = {
        name: "John",
        age: 30
    };

    useEffect(() => {
        axios.post("http://localhost:4000/admin/sample", dataToSend)
            .then((res) => {
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    useEffect(() =>{
        axios.get("http://localhost:4000/")
        .then((res)=>{
            console.log(res.data)
        })
        .catch(err=>{
            console.log(err);
        })
    })

  return (
    <div>
        <h1 className='bg-danger'>sdf</h1>
    </div>
  )
}

export default App
