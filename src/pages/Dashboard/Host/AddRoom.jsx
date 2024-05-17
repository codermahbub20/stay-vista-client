import { useState } from "react";
import AddRoomForm from "../../../components/Form/AddRoomForm";
import { imageUpload } from "../../../components/api/utils";
import useAuth from "../../../hooks/useAuth";


const AddRoom = () => {

    const { user } = useAuth();

    const [loading, setLoading] = useState(false);
    const [uploadButtonText, setUploadButtonText] = useState("Upload Image");

    const [dates, setDates] = useState({
        startDate: new Date(),
        endDate: new Date(),
        key: "selection"
    })

    // Image Upload Change Function
    const handleImageChange = image => {
        setUploadButtonText(image.name);
    }


    const handleSubmit = async (e) => {
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
        const host = {
            name: user?.displayName,
            image: user?.photoURL,
            email: user?.email
        }
        const image_url = await imageUpload(image);

        const roomData = {
            location,
            category,
            title,
            to,
            from,
            price,
            guests,
            description,
            bathrooms,
            bedrooms,
            host,
            image: image_url?.data?.display_url
        }

        console.table(roomData);

    }

    const handleDates = ranges => {
        setDates(ranges.selection);
    }

    return (
        <div>
            <AddRoomForm handleSubmit={handleSubmit} handleDates={handleDates} dates={dates} loading={loading} handleImageChange={handleImageChange}
            uploadButtonText={uploadButtonText}></AddRoomForm>
        </div>
    );
};

export default AddRoom;