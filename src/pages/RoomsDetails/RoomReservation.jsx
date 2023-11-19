/* eslint-disable react/prop-types */

import { formatDistance } from "date-fns";
import Button from "../../components/Button/Button";
import DatePicker from "./Calendar";
// import { useState } from "react";


// eslint-disable-next-line react/prop-types
const RoomReservation = ({ room }) => {

    const totalDays = parseInt(formatDistance(new Date(room?.to), new Date(room?.from)).split(' ')[0])
    console.log(totalDays)

    const totalPrice = totalDays * room.price;

    // const [value, setValue] = useState({
    //     startDate: new Date(room?.from),
    //     endDate: new Date(room?.to),
    //     key: 'selection',
    // })

    return (
        <div className="rounded-xl border-[1px] border-neutral-200 overflow-hidden bg-white">

            <div className="flex items-center gap-1 p-4">
                <div className="text-2xl font-bold">$ {room.price}</div>
                <div className="font-light text-neutral-600">night</div>
            </div>
            <hr />
            <div className="flex justify-center">
                <DatePicker></DatePicker>
            </div>
            <hr />

            <div className="p-4">
                <Button label='Reserve'></Button>
            </div>

            <hr />

            <div className="flex p-4 items-center justify-between font-bold text-lg">
                <div>Total: </div>
                <div>${totalPrice}</div>
            </div>

        </div>
    );
};

export default RoomReservation;