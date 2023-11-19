import axiosSecure from "./axiosSecure"

export const saveUser = async user =>{
    
    const currentUser ={
        email: user.email,
        role: 'guest',
        status: 'verified'
    }

    const {data} = await axiosSecure.put(`/users/${user.email}`,currentUser)

    return data;

}