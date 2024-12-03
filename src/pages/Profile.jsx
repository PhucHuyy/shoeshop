import DatePicker from "@/components/Profile/date-picker";
import NameForm from "@/components/Profile/name-form";
import TaskbarProfile from "@/components/Profile/taskbar-profile";
import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

// const data = {
//   name: "phúc",
//   email: "example@email.com",
//   phone: "0392280503",
//   address: "Hà Nội",
// };

const Profile = () => {
  const [date, setDate] = useState();

  const [data, setData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:8080/users/my-info", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setData(res.data.payload);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }
  return (
    <div className="grid grid-cols-3 gap-3 px-[60px] bg-gray-200 py-4">
      <TaskbarProfile />
      <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md border w-full">
        <h2 className="text-xl font-bold mb-2">Hồ Sơ Của Tôi</h2>
        <p className="text-sm text-gray-500 mb-6">
          Quản lý thông tin hồ sơ để bảo mật tài khoản
        </p>

        <div className="space-y-4 w-full">
          <NameForm defaultValue={data.fullname || ""} />

          <div className="flex justify-between items-center">
            <label className="text-gray-700 font-medium">Email</label>
            <div>
              <span className="text-gray-500">{data.email}</span>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <label className="text-gray-700 font-medium">Địa chỉ</label>
            <div>
              <span className="text-gray-500">{data.address}</span>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <label className="text-gray-700 font-medium">Số điện thoại</label>
            <div>
              <span className="text-gray-500">{data.phone_number || ""}</span>
              <button
                className="text-blue-500 ml-2 text-sm hover:underline"
                onClick={() => toast.success("Clicked!")}
              >
                Thay Đổi
              </button>
            </div>
          </div>

          {/* <div>
            <label className="text-gray-700 font-medium">Giới tính</label>
            <div className="flex items-center space-x-6 mt-2">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="gender"
                  defaultChecked
                  className="text-blue-600 focus:ring-blue-500"
                />
                <span>Nam</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="gender"
                  className="text-blue-600 focus:ring-blue-500"
                />
                <span>Nữ</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="gender"
                  className="text-blue-600 focus:ring-blue-500"
                />
                <span>Khác</span>
              </label>
            </div>
          </div> */}

          <div className="flex justify-between items-center">
            <label className="text-gray-700 font-medium">Ngày sinh</label>
            <DatePicker date={date} setDate={setDate} />
          </div>
        </div>

        <div className="mt-6">
          <button
            onClick={() => toast.success("Chức năng đang được hoàn thiện")}
            className="bg-red-500 text-white py-2 px-6 rounded-lg hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-300"
          >
            Lưu
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
