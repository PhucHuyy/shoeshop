// import TaskbarProfile from "@/components/Profile/taskbar-profile";

// const ChangingPass = () => {
//   return (
//     <div className="grid grid-cols-3 gap-3 px-[60px] bg-gray-200 py-4">
//       <TaskbarProfile />
//       <div>This is change password page</div>
//     </div>
//   );
// };

// export default ChangingPass;

import { useState } from "react";
import TaskbarProfile from "@/components/Profile/taskbar-profile";
import toast from "react-hot-toast";

const ChangingPass = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState({
    oldPassword: false,
    newPassword: false,
    confirmPassword: false,
  });

  const toggleVisibility = (field) => {
    setShowPassword((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Xử lý logic thay đổi mật khẩu ở đây
    toast.success("Thay đổi mật khẩu thành công!");
  };

  return (
    <div className="grid grid-cols-3 gap-3 px-[60px] bg-gray-200 py-4">
      <TaskbarProfile />
      <div className="col-span-2 bg-white p-6 rounded-md shadow-md w-full">
        <h2 className="text-2xl font-bold mb-6">Thay đổi mật khẩu</h2>
        <form onSubmit={handleSubmit}>
          {/* Mật khẩu cũ */}
          <div className="mb-4">
            <label
              htmlFor="oldPassword"
              className="block text-sm font-medium text-gray-700"
            >
              Mật khẩu cũ
            </label>
            <div className="relative mt-1">
              <input
                type={showPassword.oldPassword ? "text" : "password"}
                id="oldPassword"
                name="oldPassword"
                className="w-full p-2 border border-gray-300 rounded-md"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                required
              />
              <button
                type="button"
                onClick={() => toggleVisibility("oldPassword")}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              >
                {showPassword.oldPassword ? "Ẩn" : "Hiển thị"}
              </button>
            </div>
          </div>

          {/* Mật khẩu mới */}
          <div className="mb-4">
            <label
              htmlFor="newPassword"
              className="block text-sm font-medium text-gray-700"
            >
              Mật khẩu mới
            </label>
            <div className="relative mt-1">
              <input
                type={showPassword.newPassword ? "text" : "password"}
                id="newPassword"
                name="newPassword"
                className="w-full p-2 border border-gray-300 rounded-md"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
              <button
                type="button"
                onClick={() => toggleVisibility("newPassword")}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              >
                {showPassword.newPassword ? "Ẩn" : "Hiển thị"}
              </button>
            </div>
          </div>

          {/* Xác nhận mật khẩu */}
          <div className="mb-4">
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700"
            >
              Xác nhận mật khẩu
            </label>
            <div className="relative mt-1">
              <input
                type={showPassword.confirmPassword ? "text" : "password"}
                id="confirmPassword"
                name="confirmPassword"
                className="w-full p-2 border border-gray-300 rounded-md"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <button
                type="button"
                onClick={() => toggleVisibility("confirmPassword")}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              >
                {showPassword.confirmPassword ? "Ẩn" : "Hiển thị"}
              </button>
            </div>
          </div>

          {/* Nút submit */}
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-blue-700"
          >
            Thay đổi mật khẩu
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChangingPass;
