import { createContext, useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";

import { ScrollUp } from "../components/navigation";
import Filter from "../components/filter/Filter";
import {
  useGetAllSectionsQuery,
  useGetSectionByNameQuery,
} from "../features/clother/clotherApiSlice";
import {
  InPageHeader,
  ContextualFooter,
  Description,
  ServiceMessages,
  ProductCounter,
  InPageNavigation,
  CategoryList,
} from "../components/product-list";

type ParamType = {
  section: string;
};

interface IQueryParamsContext {
  queryParams: URLSearchParams;
  setQueryParams: Function;
}

export const ParamsContext = createContext<IQueryParamsContext>({
  queryParams: new URLSearchParams(),
  setQueryParams() {},
});

const ProductList = () => {
  const { section } = useParams<ParamType>();
  const { data: sections } = useGetAllSectionsQuery();
  const { data: activeSection } = useGetSectionByNameQuery(
    section!.replace("-", " ")
  );
  const [queryParams, setQueryParams] = useSearchParams(new URLSearchParams());

  return (
    <>
      {activeSection && sections && (
        <ParamsContext.Provider value={{ queryParams, setQueryParams }}>
          <InPageHeader section_name={activeSection.section_name} />
          <Filter />
          <ProductCounter sectionId={activeSection.id} />
          <CategoryList section={activeSection.id} />
          <InPageNavigation
            activeSectionId={activeSection.id}
            sections={sections}
          />
          <Description />
          <ServiceMessages />
          <ScrollUp />
          <ContextualFooter sections={sections} />
        </ParamsContext.Provider>
      )}
    </>
  );
};

export default ProductList;
