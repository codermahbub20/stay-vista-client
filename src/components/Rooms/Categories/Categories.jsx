import { useSearchParams } from "react-router-dom";
import Container from "../../Shared/Container";
import { categories } from "../Categories/CategoriesData"
import CategoryBox from "./CategoryBox";

const Categories = () => {

    const [params, setParams] = useSearchParams()
    const category = params.get('category')

    return (
        <Container>
            <div className="pt-4 flex items-center justify-between overflow-x-auto">
                {
                    categories?.map(item => <CategoryBox key={item.label} label={item.label} icon={item.icon} select={category == item.label} ></CategoryBox>)
                }
            </div>
        </Container>
    );
};

export default Categories;