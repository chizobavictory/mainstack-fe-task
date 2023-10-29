import info from "../assets/info.svg";
import useWalletData from "../hooks/wallet";
const Balance = () => {
  const walletData = useWalletData();
  return (
    <div className="w-[271px] flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <p className="text-gray-600 text-sm font-[degularmedium]">Ledger Balance</p>
          <img src={info} alt="info" />
        </div>
        <p className="text-neutral-900 text-[28px] font-[degularbold]">{walletData ? `USD ${walletData.ledger_balance.toFixed(2)}` : "Loading..."}</p>{" "}
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <p className="text-gray-600 text-sm font-[degularmedium]">Total Payout</p>
          <img src={info} alt="info" />
        </div>
        <p className="text-neutral-900 text-[28px] font-[degularbold]">{walletData ? `USD ${walletData.total_payout.toFixed(2)}` : "Loading..."}</p>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <p className="text-gray-600 text-sm font-[degularmedium]">Total Revenue</p>
          <img src={info} alt="info" />
        </div>
        <p className="text-neutral-900 text-[28px] font-[degularbold]">{walletData ? `USD ${walletData.total_revenue.toFixed(2)}` : "Loading..."}</p>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <p className="text-gray-600 text-sm font-[degularmedium]">Pending Payout</p>
          <img src={info} alt="info" />
        </div>
        <p className="text-neutral-900 text-[28px] font-[degularbold]">
          {walletData ? `USD ${walletData.pending_payout.toFixed(2)}` : "Loading..."}
        </p>
      </div>
    </div>
  );
};

export default Balance;
