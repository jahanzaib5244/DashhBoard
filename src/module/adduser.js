import react, { useState } from 'react'
import '../index.css';
const Adduser = () => {
    const [name,setname] = useState("")
 const inputevent= (event) =>{
     console.log(event.target.value);
     
 };


    return (
        <div style={{ marginLeft: '250px' }}>
            <h1>User Information:</h1>
            <form>
                 <input type="text"
                    placeholder="Enter UserName"
                    onChange={inputevent}

                >
                </input>
                <br />
                <input type="email"
                    placeholder="Enter Email"
                    onChange={inputevent}
                >
                </input>
                <br />
                <input type="text"
                    placeholder="Enter Roles"
                    onChange={inputevent}
                >
                </input>
                <br />
                <input
                    type="text"
                    placeholder="Enter Extra Permision"
                    onChange={inputevent}
                >
                </input>
                <button type="submit" className='submitbutton' >Submit</button>

            </form>
        </div>
    );
}
export default Adduser;