import TaskbarProfile from "../components/Profile/taskbar-profile";

const Profile = () => {
  return (
    <div className="grid grid-cols-3 gap-3 px-[60px] bg-gray-200 py-4">
      <TaskbarProfile />
      <div className="col-span-2">This is detail profile</div>
    </div>
  );
};

export default Profile;
