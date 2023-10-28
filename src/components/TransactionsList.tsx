import call_received from "../assets/call_received.svg";
import call_made from "../assets/call_made.svg";
const TransactionsList = () => {
  return (
    <div className="flex flex-col gap-4 pt-6">
      <div className="flex justify-between">
        <div className="flex gap-2">
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
            <img src={call_received} alt="call-made" />
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-neutral-900 text-base font-[degularmedium] ">Psychology of Money</p>
            <p className="text-gray-600 text-sm font-[degularmedium] ">Roy Cash</p>
          </div>
        </div>
        <div className="flex flex-col gap-1 items-end">
          <p className="text-base font-[degularbold] text-neutral-900">USD 600</p>
          <p className="text-sm font-[degularmedium] text-gray-600">Apr 03,2022</p>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex gap-2">
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
            <img src={call_received} alt="call-made" />
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-neutral-900 text-base font-[degularmedium] ">Psychology of Money</p>
            <p className="text-gray-600 text-sm font-[degularmedium] ">Roy Cash</p>
          </div>
        </div>
        <div className="flex flex-col gap-1 items-end">
          <p className="text-base font-[degularbold] text-neutral-900">USD 600</p>
          <p className="text-sm font-[degularmedium] text-gray-600">Apr 03,2022</p>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex gap-2">
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
            <img src={call_received} alt="call-made" />
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-neutral-900 text-base font-[degularmedium] ">Psychology of Money</p>
            <p className="text-gray-600 text-sm font-[degularmedium] ">Roy Cash</p>
          </div>
        </div>
        <div className="flex flex-col gap-1 items-end">
          <p className="text-base font-[degularbold] text-neutral-900">USD 600</p>
          <p className="text-sm font-[degularmedium] text-gray-600">Apr 03,2022</p>
        </div>
      </div>
    </div>
  );
};

export default TransactionsList;
