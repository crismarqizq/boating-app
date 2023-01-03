import { useEffect, useState } from "react";
import getUserInformation from "../logic/userSettings";
import SettingsForm from "../components/settingsForm";
import PasswordUpdater from "../components/passwordUpdater";

function Settings() {
  const [userInfo, setUserInfo] = useState(null);

  const fetchInfo = async () => {
    const fetchedInfo = await getUserInformation();
    setUserInfo(fetchedInfo);
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <main className="w-screen min-h-screen bg-bone flex justify-center pt-10">
      <div className="w-11/12">
        {userInfo && <SettingsForm userInfo={userInfo}></SettingsForm>}
        {userInfo && <PasswordUpdater userInfo={userInfo}></PasswordUpdater>}
      </div>
    </main>
  );
}
export default Settings;
