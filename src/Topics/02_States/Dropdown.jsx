import { useState } from "react";
const DropDown = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <h1>Drop-Down Task</h1>
      <button onClick={() => setToggle(!toggle)}>
        {toggle ? "Hide" : "Show"}
      </button>

      {toggle && <p>
          <mark>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
            praesentium. Harum hic ratione exercitationem. Quod ratione aut
            reprehenderit, expedita provident eveniet doloribus fugiat
            perferendis quae! Totam optio quaerat sequi. Itaque. Mollitia
            modi!
          </mark>
        </p>}
    </div>
  );
};

export default DropDown;
