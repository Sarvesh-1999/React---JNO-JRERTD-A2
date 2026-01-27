import React from "react";

const User = (props) => {
  let { first_name, last_name, email, gender, id } = props.user;
  return (
    <div>
      <p>
        <mark>ID</mark> : 
        {id}
      </p>
      <p>FirstName : {first_name}</p>
      <p>LastName : {last_name}</p>
      <p>email : {email}</p>
      <p>gender : {gender}</p>
    </div>
  );
};

export default User;
