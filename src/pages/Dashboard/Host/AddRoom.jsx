import { useState } from "react";
import AddRoomForm from "../../../components/Form/AddRoomForm";
import { imageUpload } from "../../../components/api/utils";


const AddRoom = () => {

    const [dates,setDates] = useState({
        startDate:new Date(),
        endDate : new Date(),
        key: "selection"
    })

    const handleSubmit =async (e)=>{
        e.preventDefault();
        const form = e.target;
        const location = form.location.value;
        const category = form.category.value;
        const title = form.title.value;
        const to = dates.endDate;
        const from = dates.startDate;
        const price = form.price.value;
        const guests = form.total_guest.value;
        const description = form.description.value;
        const bathrooms = form.bathrooms.value;
        const bedrooms = form.bedrooms.value;
        const image = form.image.files[0];

        const image_url = await imageUpload(image);

    }

    const handleDates = ranges =>{
        setDates(ranges.selection);
    }

    return (
        <div>
            <AddRoomForm handleSubmit={handleSubmit} handleDates={handleDates} dates={dates}></AddRoomForm>
        </div>
    );
};

export default AddRoom;