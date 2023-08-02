import { useGetAllSectionsQuery } from "../../features/clother/clotherApiSlice";
import { ISectionRes } from "../../features/clother/clotherType";
import { ContextualFooter } from "../product-list";

const EmptyShoppingCard = () => {
    const {data: sections} = useGetAllSectionsQuery()
  return (
    <div>
      <div className="flex justify-center mb-16">
        <h1 className="text-base font-medium tracking-tight">
          YOUR SHOPPING BAG IS EMPTY
        </h1>
      </div>
      <ContextualFooter sections={sections as ISectionRes[]} />
    </div>
  );
};

export default EmptyShoppingCard;
