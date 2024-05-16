import axiosSecure from "./axiosSecure"

// get all rooms data
export const getAllRooms = async () => {
    const { data } = await axiosSecure('/rooms')
    return data;
}

// get single rooms data
export const getRoom = async (id) => {
    const { data } = await axiosSecure(`/room/${id}`)
    return data;
}