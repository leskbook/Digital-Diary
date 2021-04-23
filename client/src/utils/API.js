import axios from 'axios';

const User={
    createMemories:(data)=>axios.post("http://localhost:5000/data/create",data),
    fetchMemories:()=> axios.get("http://localhost:5000/data/")

}

export default User;