

const Contact = ({item, handelDelete}) => {
  return (
    <li>
      <div className="li-wrap">
        <span>Name: {item.Name}</span>
        <span>Phone: {item.Number}</span>
      </div>
      <button onClick={() => handelDelete(item.id)} type="button" className="del-btn">
        Delete
      </button>
    </li>
  );
};

export default Contact;