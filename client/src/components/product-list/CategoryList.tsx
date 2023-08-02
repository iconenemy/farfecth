import { memo, useContext } from "react";
import { ProductsDisplay } from ".";
import { useGetSectionByIdQuery } from "../../features/clother/clotherApiSlice";
import { ParamsContext } from "../../routes/ProductList";

type Props = {
  section: string;
};

const CategoryList = ({ section }: Props) => {
  const paramsContext = useContext(ParamsContext);
  const { data: sections } = useGetSectionByIdQuery({
    id: section,
    query: paramsContext.queryParams.toString()
  });

  return (
    <ul className="flex flex-col justify-center pb-12 font-medium text-[14px]">
      {sections &&
        sections?.category.map(({ category_name, id }) => (
          <li key={id}>
            <ProductsDisplay
              section={section}
              category={id}
              categoryName={category_name}
            />
          </li>
        ))}
    </ul>
  );
};

export default memo(CategoryList);
