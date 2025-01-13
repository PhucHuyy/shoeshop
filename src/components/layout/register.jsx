import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    retype_password: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (formData.password !== formData.retype_password) {
      setError("Mật khẩu không khớp");
      toast.error("Mật khẩu không khớp");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8080/users/register",
        {
          fullname: formData.fullName,
          email: formData.email,
          password: formData.password,
          retype_password: formData.retype_password,
          phone_number: formData.phone_number,
        }
      );

      setSuccess("Đăng ký thành công! Vui lòng đăng nhập.");
      toast.success("Đăng ký thành công! Vui lòng đăng nhập.");
    } catch (err) {
      const errorMessage =
        err.response?.data?.message || "Có lỗi xảy ra. Vui lòng thử lại.";
      setError(errorMessage);
      toast.error(errorMessage);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">Đăng ký</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          {error && <div className="text-red-500 text-sm">{error}</div>}
          {success && <div className="text-green-500 text-sm">{success}</div>}
          <div>
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-gray-700"
            >
              HỌ VÀ TÊN
            </label>
            <input
              type="text"
              id="fullName"
              placeholder="Nhập họ tên của bạn"
              value={formData.fullName}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="phone_number"
              className="block text-sm font-medium text-gray-700"
            >
              SỐ ĐIỆN THOẠI
            </label>
            <input
              type="text"
              id="phone_number"
              placeholder="Nhập số điện thoại của bạn"
              value={formData.phone_number}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              EMAIL
            </label>
            <input
              type="email"
              id="email"
              placeholder="Nhập email của bạn"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              MẬT KHẨU
            </label>
            <input
              type="password"
              id="password"
              placeholder="Nhập mật khẩu"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="retype_password"
              className="block text-sm font-medium text-gray-700"
            >
              XÁC NHẬN MẬT KHẨU
            </label>
            <input
              type="password"
              id="retype_password"
              placeholder="Xác nhận mật khẩu"
              value={formData.retype_password}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Đăng ký
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
