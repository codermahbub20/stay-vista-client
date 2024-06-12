/* eslint-disable react/prop-types */

import { formatDistance } from "date-fns";
import Button from "../../components/Button/Button";
import DatePicker from "./Calendar";
import { useState } from "react";
import BookingModal from "../../components/Modal/BookingModal";
import useAuth from "../../hooks/useAuth";


// eslint-disable-next-line react/prop-types
const RoomReservation = ({ room }) => {

    let [isOpen, setIsOpen] = useState(false)
    const { user } = useAuth();

    const closeModal = () => {
        setIsOpen(false);
    }

    const totalDays = parseInt(formatDistance(new Date(room?.to), new Date(room?.from)).split(' ')[0])
    console.log(totalDays)

    const totalPrice = totalDays * room.price;

    const [value, setValue] = useState({
        startDate: new Date(room?.from),
        endDate: new Date(room?.to),
        key: 'selection',
    })


    const [bookingInfo, setBookingInfo] = useState({
        guest: {
          name: user?.displayName,
          email: user?.email,
          image: user?.photoURL,
        },
        host: room?.host?.email,
        location: room?.location,
        price: totalPrice,
        to: value.endDate,
        from: value.startDate,
        title: room?.title,
        roomId: room?._id,
        image: room?.image,
      })
    
      console.log(value)

   

    return (
        <div className="rounded-xl border-[1px] border-neutral-200 overflow-hidden bg-white">

            <div className="flex items-center gap-1 p-4">
                <div className="text-2xl font-bold">$ {room.price}</div>
                <div className="font-light text-neutral-600">night</div>
            </div>
            <hr />
            <div className="flex justify-center">
                <DatePicker value={value}></DatePicker>
            </div>
            <hr />

            <div className="p-4">
                <Button disabled={room?.host?.email === user?.email || room?.booked } onClick={() => setIsOpen(true)} label='Reserve'></Button>
            </div>

            <hr />

            <div className="flex p-4 items-center justify-between font-bold text-lg">
                <div>Total: </div>
                <div>${totalPrice}</div>
            </div>

            <BookingModal closeModal={closeModal} isOpen={isOpen} bookingInfo={bookingInfo} />

        </div>
    );
};

export default RoomReservation;