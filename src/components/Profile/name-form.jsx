import { BookmarkX, Pencil } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";

const NameForm = (props) => {
  const { defaultValue } = props;

  const [editing, setEditing] = useState(false);

  return (
    <div className="flex flex-col space-y-1">
      <div className="flex items-center justify-between">
        <label className="text-gray-700 font-medium">Tên</label>
        {!editing ? (
          <Pencil
            size={14}
            className="cursor-pointer"
            onClick={() => setEditing(true)}
          />
        ) : (
          <BookmarkX
            size={18}
            className="cursor-pointer"
            onClick={() => setEditing(false)}
          />
        )}
      </div>
      {editing ? (
        <div className="flex flex-col space-y-2">
          <input
            type="text"
            placeholder="John Doe"
            defaultValue={defaultValue}
            className=" w-full border-2 border-gray-300 rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:ring focus:ring-blue-200"
          />
          <div className="ml-auto flex space-x-3 px-3">
            <button
              onClick={() => setEditing(false)}
              className="p-1 rounded-lg hover:bg-gray-300 active:bg-gray-400"
            >
              Huỷ
            </button>
            <button
              className="p-1 rounded-lg border-2 border-red-400 hover:bg-red-400 active:bg-red-500 font-semibold text-red-600"
              onClick={() => {
                toast.success("Call API!");
                setEditing(false);
              }}
            >
              Lưu
            </button>
          </div>
        </div>
      ) : (
        <div className="px-3 py-2 border rounded-lg">{defaultValue}</div>
      )}
    </div>
  );
};

export default NameForm;
