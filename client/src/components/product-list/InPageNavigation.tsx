import { ISectionRes } from "../../features/clother/clotherType";

type Props = {
  sections: ISectionRes[];
  activeSectionId: string
};

const InPageNavigation = ({ sections, activeSectionId }: Props) => {
  return (
    <div className="mb-32 py-10 ">
      <ul className=" flex flex-col items-center uppercase font-light text-2xl">
        {sections?.map(
          ({ id: sectionId, section_name }: ISectionRes) =>
            sectionId !== activeSectionId && (
              <li className="p-3 gap-2 cursor-pointer" key={sectionId}>
                {section_name}
              </li>
            )
        )}
      </ul>
    </div>
  );
};

export default InPageNavigation;
