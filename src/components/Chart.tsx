import line from "../assets/Line29.png";

const Chart = () => {
  return (
    <div>
      <div className="flex gap-16 items-center">
        <div className="flex flex-col gap-2">
          <p className="text-gray-600 font-[degularmedium] text-sm">Available Balance</p>
          <p className="text-neutral-900 font-bold text-4xl font-[degularbold]">USD 120,500.00</p>
        </div>
        <button className="bg-neutral-900 w-[167px] text-white px-7 py-3.5 rounded-full font-[degularsemibold]">Withdraw</button>
      </div>
      <div className="pt-20 flex flex-col gap-4">
        <img src={line} alt="line" />
        <div className="flex flex-col gap-2">
          <div className="w-full border-t border-gray-300" />
          <div className="flex justify-between font-[degularmedium] text-base text-gray-600">
            <p>Apr 1 , 2022</p>
            <p>Apr 30 , 2022</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chart;
