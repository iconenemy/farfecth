import { services } from "../../consts";

const ServiceMessages = () => {
  return (
    <div className="pt-12 pb-28">
      <ul className="flex justify-center uppercase">
        {services.map(({ id, label, icon }) => (
          <li
            className="flex flex-col items-center w-[220px] text-center text-[12px] font-medium"
            key={id}
          >
            <div className="mb-[15px]">{icon}</div>
            <p>{label}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceMessages;
