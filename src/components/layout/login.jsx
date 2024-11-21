import React from "react";

const LoginForm = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">Đăng nhập</h2>
        <form className="space-y-4">
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
              placeholder="Nhập Email của bạn"
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
              placeholder="Nhập Mật khẩu"
              className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Đăng nhập
          </button>
        </form>
        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            Bạn chưa có tài khoản?{" "}
            <a
              href="/account/register"
              className="text-blue-600 font-medium hover:underline"
            >
              Đăng ký ngay
            </a>
          </p>
          <a
            href="#"
            className="text-blue-600 text-sm font-medium hover:underline block mt-2"
          >
            Quên mật khẩu?
          </a>
        </div>
        <div className="mt-6 flex items-center justify-center">
          <hr className="w-full border-t border-gray-300" />
          <span className="mx-4 text-gray-500">hoặc</span>
          <hr className="w-full border-t border-gray-300" />
        </div>
        <button className="w-full mt-4 bg-white text-gray-600 font-medium py-2 px-4 rounded-md border shadow-sm flex items-center justify-center hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300">
          <svg
            className="w-5 h-5 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
          >
            <path
              fill="#EA4335"
              d="M24 9.5c3.93 0 6.4 1.68 7.89 3.1l5.9-5.9C33.4 3.5 29.14 2 24 2 14.78 2 7.1 8.88 4.47 17.46l6.94 5.4C13.38 15.47 18.33 9.5 24 9.5z"
            />
            <path
              fill="#34A853"
              d="M46.5 24c0-1.38-.12-2.71-.34-4H24v8.5h12.8C35.48 34.17 30.58 38 24 38c-6.67 0-12.24-4.4-14.16-10.44l-6.94 5.4C7.1 39.12 14.78 46 24 46c12 0 22-10 22-22z"
            />
            <path
              fill="#4A90E2"
              d="M3.3 14.94A21.98 21.98 0 0 0 2 24c0 3.13.72 6.09 2.02 8.7l6.94-5.4C10.12 25.47 9.5 24.25 9.5 24c0-.25.62-1.47 1.46-3.3l-6.94-5.4z"
            />
            <path
              fill="#FBBC05"
              d="M24 9.5c3.93 0 6.4 1.68 7.89 3.1l5.9-5.9C33.4 3.5 29.14 2 24 2 14.78 2 7.1 8.88 4.47 17.46l6.94 5.4C13.38 15.47 18.33 9.5 24 9.5z"
            />
          </svg>
          Đăng nhập bằng Google
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
