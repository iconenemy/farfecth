type Props = {
  section_name: string;
};

const InPageHeader = ({ section_name }: Props) => {
  return (
    <div className="pt-28 pb-32 flex justify-center uppercase font-medium tracking-wider">
      {section_name === "Men" || section_name === "Women" ? (
        <h1>{section_name}'s clothing</h1>
      ) : (
        <h1>{section_name?.replace("-", " ")}</h1>
      )}
    </div>
  );
};

export default InPageHeader;
