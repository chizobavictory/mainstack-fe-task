import avi from "../assets/avi.svg";
import useUserData from "../hooks/user";

const UserDropdown = () => {
  const userData = useUserData();
  return (
    <div className="absolute top-27 right-4 w-[340px] bg-white border border-gray-300 shadow-md rounded-md p-2 ">
      <ul className="py-2">
      <li className="px-4 py-2 cursor-pointer rounded-md">
          <div className="p-2 cursor-pointer flex gap-2">
            <img src={avi} alt="side-menu" />
            <div className="flex flex-col gap-1">
              <div className="flex gap-1">
                <p className="text-neutral-900 text-base font-[degularmedium]">{userData ? userData.first_name : "Loading..."}</p>
                <p className="text-neutral-900 text-base font-[degularmedium]">{userData ? userData.last_name : "Loading..."}</p>
              </div>
              <p className="text-gray-600 text-sm font-[degularmedium]">{userData ? userData.email : "Loading..."}</p>
            </div>
          </div>
        </li>
        <li className="px-4 py-2 hover:shadow rounded-md cursor-pointer">
          <div>
          <p className="text-neutral-900 text-base font-[degularmedium]">
            Settings
          </p>
          </div>
        </li>
        <li className="px-4 py-2 hover:shadow rounded-md cursor-pointer">
        <div>
          <p className="text-neutral-900 text-base font-[degularmedium]">
            Purchase History
          </p>
          </div>
        </li>
        <li className="px-4 py-2 hover:shadow rounded-md cursor-pointer">
        <div>
          <p className="text-neutral-900 text-base font-[degularmedium]">
            Refer and Earn
          </p>
          </div>
        </li>
        <li className="px-4 py-2 hover:shadow rounded-md cursor-pointer">
        <div>
          <p className="text-neutral-900 text-base font-[degularmedium]">
            Integrations
          </p>
          </div>
        </li>
        <li className="px-4 py-2 hover:shadow rounded-md cursor-pointer">
        <div>
          <p className="text-neutral-900 text-base font-[degularmedium]">
            Report Bug
          </p>
          </div>
        </li>
        <li className="px-4 py-2 hover:shadow rounded-md cursor-pointer">
        <div>
          <p className="text-neutral-900 text-base font-[degularmedium]">
            Switch Account
          </p>
          </div>
        </li>
        <li className="px-4 py-2 hover:shadow rounded-md cursor-pointer">
        <div>
          <p className="text-neutral-900 text-base font-[degularmedium]">
            Sign Out
          </p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default UserDropdown;
