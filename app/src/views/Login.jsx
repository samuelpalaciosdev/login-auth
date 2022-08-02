import { useContext } from "react";
import { Context } from "../store/appContext";

const Login = () => {
  const { store, actions } = useContext(Context);
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 p-5">
            <form className="m-5">
              <div className="row mb-3">
                <label
                  htmlFor="inputEmail3"
                  className="col-sm-2 col-form-label"
                >
                  Email
                </label>
                <div className="col-sm-10">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={store.email}
                    onChange={actions.handleChange}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label
                  htmlFor="inputPassword3"
                  className="col-sm-2 col-form-label"
                >
                  Password
                </label>
                <div className="col-sm-10">
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    value={store.password}
                    onChange={actions.handleChange}
                  />
                </div>
              </div>
              <div className="d-flex">
                <button type="button" className="btn btn-primary w-100">
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
