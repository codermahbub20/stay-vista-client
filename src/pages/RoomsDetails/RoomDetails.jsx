import { useParams } from "react-router-dom";
import Container from "../../components/Shared/Container";
import { useEffect, useState } from "react";
import Loader from "../../components/Shared/Loader";
import Header from "../../components/RoomDetails/Header";
import RoomInfo from "../../components/RoomDetails/RoomInfo";
import RoomReservation from "./RoomReservation";




const RoomDetails = () => {

    const { id } = useParams()
    const [room, setRoom] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        fetch('http://localhost:5000/rooms')
            .then(res => res.json())
            .then(data => {
                const singleRoom = data.find(room => room._id === id)
                setRoom(singleRoom)
                setLoading(false)
            })
    }, [id])

    if (loading) return <Loader></Loader>

    return (
        <Container>
            <div className="max-w-screen-lg mx-auto">
                {/* header component */}
                <div className="flex flex-col gap-6">
                    <Header room={room}></Header>
                </div>
                {/* Header component end  */}

                {/* Room Info Section */}
                <div className="grid grid-cols-1 md:grid-cols-7 md:gap-10 mt-6">
                    <RoomInfo room={room}></RoomInfo>

                    {/* calender section */}
                    <div className="md:col-span-3 order-first md:order-last mb-10">
                    <RoomReservation room={room}></RoomReservation>
                    </div>
                </div>

                {/* Room Info Section */}
            </div>
        </Container>
    );
};

export default RoomDetails;