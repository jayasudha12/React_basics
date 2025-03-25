import { useState } from "react";

const Add = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleUser = (e) => {
        e.preventDefault(); 
        console.log("Name:", name);
        console.log("Email:", email);
    };

    return (
        <>
            <form onSubmit={handleUser}>
                <center>
                    <p>Name of the User:</p>
                    <input 
                        type="text" 
                        placeholder="Enter Your name" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                    />
                    <br />
                    
                    <p>Email of the User:</p>
                    <input 
                        type="email" 
                        placeholder="Enter Your email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                    <br /><br />

                    <button type="submit">ADD USER</button>
                </center>
            </form>
        </>
    );
};

export default Add;
