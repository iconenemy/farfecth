import { useState } from "react";
import { useParams } from "react-router-dom";

import { useGetProductByIdQuery } from "../features/clother/clotherApiSlice";
import {
  FitDetails,
  ErrorPanel,
  LinksPanel,
  ActionPanel,
  ProductImage,
  MessagePanel,
  ProductSizeInfo,
  ProductInfoPanel,
  InfoButtonsPanel,
  ProductContainer,
  ProductColorInfo,
  ProductInfoWrapper,
  ProductDetailsContainer,
  DeliveryDetails,
  DetailsInfoContainer,
  DescriptionDetails,
  ContactDetails,
} from "../components/product-item";

type Params = {
  id: string;
};

const ProductItem = () => {
  const { id } = useParams<Params>();
  const { data: product } = useGetProductByIdQuery(atob(id as string));

  const [existSize, setExistSize] = useState<boolean>(true);
  const [sizeError, setSizeError] = useState<boolean>(false);
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [detailsSection, setDetailsSection] = useState<string>("");

  return (
    <>
      {product && (
        <ProductContainer>
          <ProductImage image={product.image} />
          <ProductDetailsContainer>
            {detailsSection === "" ? (
              <>
                <ProductInfoPanel product={product} />
                <ProductColorInfo color={product.color} />
                <ProductSizeInfo
                  product={product}
                  selectedSize={selectedSize}
                  setExistSize={setExistSize}
                  setSizeError={setSizeError}
                  setSelectedSize={setSelectedSize}
                />
                <ProductInfoWrapper>
                  <MessagePanel
                    existSize={existSize}
                    setDetailsSection={setDetailsSection}
                  />
                  <ActionPanel
                    product={product}
                    existSize={existSize}
                    selectedSize={selectedSize}
                    setSizeError={setSizeError}
                  />
                  <ErrorPanel sizeError={sizeError} />
                  <LinksPanel />
                </ProductInfoWrapper>
                <FitDetails description={product.description} />
                <InfoButtonsPanel setDetailsSection={setDetailsSection} />
              </>
            ) : (
              <DetailsInfoContainer>
                {detailsSection === "contacts" && (
                  <ContactDetails setDetailsSection={setDetailsSection} />
                )}
                {detailsSection === "delivery" && (
                  <DeliveryDetails setDetailsSection={setDetailsSection} />
                )}
                {detailsSection === "description" && (
                  <DescriptionDetails
                    description={product.description}
                    setDetailsSection={setDetailsSection}
                  />
                )}
              </DetailsInfoContainer>
            )}
          </ProductDetailsContainer>
        </ProductContainer>
      )}
    </>
  );
};

export default ProductItem;
