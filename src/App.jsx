import { useState } from "react";

function App() {
  const [info, setInfo] = useState({
    이름: "문가은",
    나이: "21",
    취미: "사진 찍기",
    좋아하는음식: "하이디라오",
  });

  const [editing, setEditing] = useState(false);
  const [temp, setTemp] = useState(info);

  const handleChange = (e) => {
    setTemp({ ...temp, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setInfo(temp);
    setEditing(false);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>자기소개 카드</h1>
      <div style={{
        display: "inline-block",
        backgroundColor: "black",
        color: "white",
        padding: "30px",
        borderRadius: "16px",
        textAlign: "left",
        minWidth: "220px",
      }}>
        {editing ? (
          <>
            {Object.keys(temp).map((key) => (
              <div key={key} style={{ marginBottom: "10px" }}>
                <label style={{ color: "cyan" }}>{key}: </label>
                <input
                  name={key}
                  value={temp[key]}
                  onChange={handleChange}
                  style={{ marginLeft: "8px" }}
                />
              </div>
            ))}
            <button onClick={handleSave}>저장</button>
          </>
        ) : (
          <>
            <p>이름 : {info.이름}</p>
            <p>나이 : {info.나이}</p>
            <p>취미 : {info.취미}</p>
            <p>좋아하는 음식 : {info.좋아하는음식}</p>
            <button onClick={() => setEditing(true)}>변경</button>
          </>
        )}
      </div>
    </div>
  );
}

export default App;