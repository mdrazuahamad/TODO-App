import useApp from "./ReactHooks";

function RandomUser() {
  const { user, userId, maxUserId, handleNext, handlePrev } = useApp();

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f7fa",
      }}>
      <div
        style={{
          background: "#ffffff",
          padding: "30px",
          borderRadius: "12px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
          maxWidth: "400px",
          width: "100%",
        }}>
        {user ? (
          <>
            <h2 style={{ color: "#333", marginBottom: "10px" }}>User _ {userId}</h2>
            <h3 style={{ color: "#0070f3", margin: "10px 0" }}>{user.name}</h3>
            <p style={{ margin: "5px 0", color: "#555" }}>
              <strong>Username:</strong> {user.username}
            </p>
            <p style={{ margin: "5px 0", color: "#555" }}>
              <strong>Email:</strong> {user.email}
            </p>
            <p style={{ margin: "5px 0", color: "#555" }}>
              <strong>Phone:</strong> {user.phone}
            </p>
            <p style={{ margin: "5px 0", color: "#555" }}>
              <strong>Company:</strong>{" "}
              {user.company
                ? `${user.company.name}, ${user.company.catchPhrase}, ${user.company.bs}`
                : "N/A"}
            </p>
            <p style={{ margin: "5px 0", color: "#555" }}>
              <strong>Address:</strong> {""}
              {user.address
                ? `${user.address.street}, ${user.address.city}, ${user.address.zipcode}`
                : "N/A"}
            </p>
          </>
        ) : (
          <p>Loading...</p>
        )}

        <div
          style={{
            marginTop: "20px",
            display: "flex",
            gap: "10px",
          }}>
          <button
            onClick={handlePrev}
            disabled={userId === 1}
            style={{
              padding: "10px 20px",
              border: "none",
              borderRadius: "6px",
              backgroundColor: userId === 1 ? "#ccc" : "#0070f3",
              color: "#fff",
              cursor: userId === 1 ? "not-allowed" : "pointer",
              fontWeight: "bold",
            }}>
            Previous
          </button>
          <button
            onClick={handleNext}
            disabled={userId === maxUserId}
            style={{
              padding: "10px 20px",
              border: "none",
              borderRadius: "6px",
              backgroundColor: userId === maxUserId ? "#ccc" : "#0070f3",
              color: "#fff",
              cursor: userId === maxUserId ? "not-allowed" : "pointer",
              fontWeight: "bold",
            }}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default RandomUser;
