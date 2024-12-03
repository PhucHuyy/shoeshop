const NameForm = (props) => {
  const { defaultValue } = props;
  console.log(defaultValue);

  return (
    <div className="flex justify-between items-center">
      <label className="text-gray-700 font-medium">Tên</label>
      <input
        type="text"
        defaultValue={defaultValue}
        className="border border-gray-300 rounded-lg px-3 py-2 w-48 text-gray-700 focus:outline-none focus:ring focus:ring-blue-200"
      />
    </div>
  );
};

export default NameForm;
