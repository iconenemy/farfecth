type Props = {
    description: string;
};

const FitDetails = ({ description }: Props) => {
  return (
    <div className="flex flex-col pb-3">
      <h2 className="mb-6 mt-8 text-sm font-medium">PRODUCT DETAILS</h2>
      <ul className="flex flex-col gap-4 text-sm">
        {description.split(".").filter((item, idx) => idx < 4 && (
          <li className="tracking-tighter" key={idx}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FitDetails;
