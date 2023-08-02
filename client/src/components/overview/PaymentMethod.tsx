const PaymentMethod = () => {
  return (
    <div className="w-full py-12 px-8 flex flex-row border-b-[#ccc] border-[1px]">
      <div className="w-4/12 flex flex-col">
        <h4 className="uppercase font-medium text-[14px]">payment methods</h4>
      </div>
      <div className="w-5/12 flex justify-start text-[14px]">
        <p>No payment method stored</p>
      </div>
      <div className="w-3/12 flex justify-center"></div>
    </div>
  );
};

export default PaymentMethod;
