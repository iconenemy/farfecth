import { memo } from "react";
import { Link } from "react-router-dom";
import { ISectionRes } from "../../features/clother/clotherType";

type Props = {
  sections: ISectionRes[];
};

const ContextualFooter = ({ sections }: Props) => {
  return (
    <div className="mt-12 pt-10 flex flex-col items-center">
      <p className="uppercase text-[12px] font-medium">more for you</p>
      <div className="py-6">
        <ul className="flex flex-row ">
          {sections?.map(({ id, section_name }: ISectionRes) => (
            <Link
              className="px-4 mb-6 [&:not(:last-child)]:border-r-[1px] border-[#ccc] text-[12px]"
              key={id}
              to={`/${section_name.toLocaleLowerCase().replace(/\s/g, "-")}`}
              state={{ id, section_name, sections }}
              preventScrollReset={true}
            >
              {section_name.charAt(0).toUpperCase().concat(section_name.slice(1))}
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default memo(ContextualFooter);
