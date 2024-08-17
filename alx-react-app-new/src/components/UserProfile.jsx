const UserProfile = (props) => {
  return (
    <div>
      <h2
        style={{
          backgroundColor: "grey",
          color: "white",
          textAlign: "center",
          padding: "10px",
          borderRadius: "20px",
          width: "60%",
          marginLeft: "200px",
          border: "1px solid black",
        }}
      >
        {props.name}
      </h2>
      <p
        style={{
          backgroundColor: "grey",
          color: "white",
          textAlign: "center",
          padding: "10px",
          borderRadius: "20px",
          width: "60%",
          marginLeft: "200px",
          border: "1px solid black",
          fontSize: "25px",
        }}
      >
        Age: <span style={{ fontWeight: "bold" }}>{props.age}</span>
      </p>
      <p
        style={{
          backgroundColor: "grey",
          color: "white",
          textAlign: "center",
          padding: "10px",
          borderRadius: "20px",
          width: "60%",
          marginLeft: "200px",
          border: "1px solid black",
          fontSize: "25px",
        }}
      >
        Bio: {props.bio}
      </p>
    </div>
  );
};

export default UserProfile;
