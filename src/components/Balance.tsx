import info from "../assets/info.svg";
const Balance = () => {
  return (
    <div className="w-[271px] flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <p className="text-gray-600 text-sm font-[degularmedium]">Ledger Balance</p>
          <img src={info} alt="info" />
        </div>
        <p className="text-neutral-900 text-[28px] font-[degularbold]">USD 0.00</p>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <p className="text-gray-600 text-sm font-[degularmedium]">Total Payout</p>
          <img src={info} alt="info" />
        </div>
        <p className="text-neutral-900 text-[28px] font-[degularbold]">USD 55,080.00</p>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <p className="text-gray-600 text-sm font-[degularmedium]">Total Revenue</p>
          <img src={info} alt="info" />
        </div>
        <p className="text-neutral-900 text-[28px] font-[degularbold]">USD 175,580.00</p>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <p className="text-gray-600 text-sm font-[degularmedium]">Ledger Balance</p>
          <img src={info} alt="info" />
        </div>
        <p className="text-neutral-900 text-[28px] font-[degularbold]">USD 0.00</p>
      </div>
    </div>
  );
};

export default Balance;
