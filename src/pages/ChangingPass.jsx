import TaskbarProfile from "@/components/Profile/taskbar-profile";

const ChangingPass = () => {
  return (
    <div className="grid grid-cols-3 gap-3 px-[60px] bg-gray-200 py-4">
      <TaskbarProfile />
      <div>This is change password page</div>
    </div>
  );
};

export default ChangingPass;
