const MyBookingsRow = ({ booking,handleDelete,handleApprove }) => {
  const { _id,serviceName, img, serviceDate, price,status } = booking;
  return (
    <tr>
      <th>
        <label>
          <button onClick={() => handleDelete(_id)} className="btn btn-circle btn-sm btn-neutral">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </label>
      </th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="w-32 rounded">
              <img src={img} />
            </div>
          </div>
          <div>
            <div className="font-bold text-lg">{serviceName}</div>
          </div>
        </div>
      </td>
      <td className="font-semibold text-base">${price}</td>
      <td className="text-base">{serviceDate}</td>
      <th>
        {
          status === 'approved' ? <span className="font-bold text-green-500">Approved</span> :
          <button onClick={() => handleApprove(_id)} className="btn border-[#FF3811] bg-[#FF3811] hover:bg-[#FF3811] hover:border-[#FF3811] text-white btn-sm ">Approve</button>}
      </th>
    </tr>
  );
};

export default MyBookingsRow;
