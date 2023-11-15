import { useParams } from "react-router-dom";
import Container from "../../components/Shared/Container";
import { useEffect, useState } from "react";
import Loader from "../../components/Shared/Loader";


const RoomDetails = () => {

    const { id } = useParams()
    const [room, setRoom] = useState([])
    const [loading,setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        fetch('/rooms.json')
            .then(res => res.json())
            .then(data => {
                const singleRoom = data.find(room => room._id === id)
                setRoom(singleRoom)
                setLoading(false)
            })
    }, [id])

    if(loading) return <Loader></Loader>

    return (
        <Container>
         {room.title}  
        </Container>
    );
};

export default RoomDetails;