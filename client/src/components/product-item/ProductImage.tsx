type Props = {
  image: string;
};

const ProductImage = ({ image }: Props) => {
  return (
    <div className="w-1/2 h-full flex justify-center ">
      <img src={image} />
    </div>
  );
};

export default ProductImage;
