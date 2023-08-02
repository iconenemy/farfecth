type Props = {
  color: string;
};

const ProductInfoColor = ({ color }: Props) => {
  return (
    <div className="w-full pt-6 mb-5 gap-2 flex flex-row items-cente">
      <h2 className="text-sm font-medium">COLOUR:</h2>
      <div className="text-sm">
        {color.charAt(0).toUpperCase().concat(color.slice(1))}
      </div>
    </div>
  );
};

export default ProductInfoColor;
