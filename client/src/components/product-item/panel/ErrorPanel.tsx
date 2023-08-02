type Props = {
  sizeError: boolean;
};

const ErrorPanel = ({ sizeError }: Props) => {
  return (
    <>
      {sizeError && (
        <div className="pt-5 mb-7">
          <div className="text-sm text-[#ed1c24]">Please select a size </div>
        </div>
      )}
    </>
  );
};

export default ErrorPanel;
