/* eslint-disable react/prop-types */

import { useNavigate, useSearchParams } from "react-router-dom";
import qs from "query-string"

const CategoryBox = ({ label, icon: Icon, select }) => {

    const [params, setParams] = useSearchParams()
    const navigate = useNavigate()

    const handleClick = () => {

        let currentQuery = {}
        if (params) {
            currentQuery = qs.parse(params.toString())
        }
        const updateQuery = { ...currentQuery, category: label }
        const url = qs.stringifyUrl({
            url: "/",
            query: updateQuery,
        })
        navigate(url)


    }

    return (
        <div onClick={handleClick} className={`flex flex-col items-center justify-center transition hover:text-neutral-800 cursor-pointer p-3 gap-2  ${select ? 'border-b-2 border-black' : 'border-b-2 '} `}>
            <Icon size={26}></Icon>
            <div className="text-sm font-medium">{label}</div>
        </div>
    );
};

export default CategoryBox;