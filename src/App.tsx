import { useEffect } from "react";

function App() {
  const getUsers = async () => {
    try {
      const response = await fetch("http://localhost:3000/users");
      const jsonData = await response.json();
      return jsonData;
    } catch (error) {
      console.log(error);
    }
  };

  const suma = (a: number, b: number): number => {
    return a + b;
  };

  useEffect(() => {
    getUsers().then((data) => console.log(data));
  }, []);

  return (
    <>
      <section>
        <h2>RESULTADO DE LA SUMA</h2>

        <p
          style={{
            display: "flex",
            backgroundColor: "red",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "6rem",
          }}
        >
          {suma(1, 2)}
        </p>
      </section>
    </>
  );
}

export default App;
