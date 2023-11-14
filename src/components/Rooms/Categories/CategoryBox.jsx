/* eslint-disable react/prop-types */


const CategoryBox = ({ label, icon: Icon }) => {
    return (
        <div className="flex flex-col items-center justify-center transition hover:text-neutral-800 cursor-pointer p-3 gap-2">
            <Icon size={26}></Icon>
            <div className="text-sm font-medium">{label}</div>
        </div>
    );
};

export default CategoryBox;