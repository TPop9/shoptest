import { useRef, useState, useEffect } from "react";

import ModalDialog from "./ModalDialog";

const Login = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [modalData, setModalData] = useState(null);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const modalData = [
      {
        label: "Username",

        value: user,
      },

      {
        label: "Password",

        value: pwd,
      },
    ];

    setModalData(modalData);
  };

  return (
    <>
      {modalData && (
        <ModalDialog
          data={modalData}
          setModalData={setModalData}
          title="Login"
        />
      )}

      <section>
        <p
          ref={errRef}
          className={errMsg ? "errmsg" : "offscreen"}
          aria-live="assertive"
        >
          {errMsg}
        </p>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            ref={userRef}
            autoComplete="off"
            onChange={(e) => setUser(e.target.value)}
            value={user}
            required
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPwd(e.target.value)}
            value={pwd}
            required
          />
          <button>Sign In</button>
        </form>
      </section>
    </>
  );
};

export default Login;
