import { set } from "mongoose";
import React, { useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    dov: "",
    tov: "",
    lat: "",
    long: "",
    detail: "",
    desc: "",
    see: "",
  });
  const { name, category, dov, tov, lat, long, detail, desc, see } = formData;
  const [mustSee, setMustSee] = useState(false);
  const [report, setReport] = useState(false);

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleCheckbox = () => {
    setMustSee(!mustSee);
  };

  const must = () => {
    if (mustSee === true) {
      return 1;
    } else {
      return 0;
    }
  };

  const onSave = (e) => {
    e.preventDefault();
    const res = {
      name,
      category,
      dov,
      tov,
      lat,
      long,
      detail,
      desc,
      see: must(),
    };
    //console.log(formData);
    //Code for password validation
    var letters = /^[A-Za-z]+$/;
    //   /[-+][0-9]+\.[0-9]+$/
    var valid = /^[-+][0-9]+\.[0-9]+$/;
    if (
      res.name === "" ||
      res.category === "" ||
      res.dov === "" ||
      res.tov === "" ||
      res.lat === "" ||
      res.long === "" ||
      res.detail === "" ||
      res.desc === "" ||
      res.see === ""
    ) {
      alert("Enter each details correctly");
    } else if (!letters.test(name)) {
      alert("Name is incorrect must contain alphabets only");
    } else if (!letters.test(category)) {
      alert("Category is incorrect must contain alphabets only");
      // } else if (!valid.test(e)) {
      //     alert('Latitude is incorrect must contain digits only');
      // } else if (!valid.test(f)) {
      //     alert('Longitude is incorrect must contain degits only');
      // }
    } else if (!letters.test(detail)) {
      alert("Details is incorrect must contain alphabets only");
    } else if (!letters.test(desc)) {
      alert("Description is incorrect must contain alphabets only");
    } else {
      alert("Are you ready to submit?");
    }

    setData([...data, res]);
    console.log(data);
  };

  const handleReport = () => {
    setReport(true);
  };

  const handleReset = () => {
    setFormData('')
  }

  return (
    <div className="App">
      <div className="container">
        <div
          id="signupbox"
          style={{ marginTop: "50px" }}
          className="mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2"
        >
          <div className="panel panel-info">
            <div className="panel-heading">
              <div className="panel-title">Sign Up</div>
              <div
                style={{
                  float: "right",
                  fontSize: "85%",
                  position: "relative",
                  top: "-10px",
                }}
              >
                <a id="signinlink" href="/accounts/login/">
                  Sign In
                </a>
              </div>
            </div>
            <div className="panel-body">
              <form className="form-horizontal">
                <div id="div_id_username" className="form-group required">
                  <label
                    htmlFor="id_username"
                    className="control-label col-md-4  requiredField"
                  >
                    {" "}
                    Name<span className="asteriskField">*</span>{" "}
                  </label>
                  <div className="controls col-md-8 ">
                    <input
                      className="input-md  textinput textInput form-control"
                      id="id_username"
                      maxLength={30}
                      name="name"
                      placeholder="Enter your name"
                      value={name}
                      onChange={handleChange}
                      style={{ marginBottom: "10px" }}
                      type="text"
                    />
                  </div>
                </div>
                <div id="div_id_email" className="form-group required">
                  <label
                    htmlFor="id_email"
                    className="control-label col-md-4  requiredField"
                  >
                    {" "}
                    Category<span className="asteriskField">*</span>{" "}
                  </label>
                  <div className="controls col-md-8 ">
                    <input
                      className="input-md emailinput form-control"
                      id="id_category"
                      name="category"
                      placeholder="Enter your category"
                      value={category}
                      onChange={handleChange}
                      style={{ marginBottom: "10px" }}
                      type="text"
                    />
                  </div>
                </div>
                <div id="div_id_name" className="form-group required">
                  <label
                    htmlFor="id_name"
                    className="control-label col-md-4  requiredField"
                  >
                    {" "}
                    Date of Visit<span className="asteriskField">*</span>{" "}
                  </label>
                  <div className="controls col-md-8 ">
                    <input
                      className="input-md textinput textInput form-control"
                      id="id_date"
                      name="dov"
                      placeholder="Enter your date"
                      value={dov}
                      onChange={handleChange}
                      style={{ marginBottom: "10px" }}
                      type="date"
                    />
                  </div>
                </div>
                <div id="div_id_name" className="form-group required">
                  <label
                    htmlFor="id_name"
                    className="control-label col-md-4  requiredField"
                  >
                    {" "}
                    Time of visit<span className="asteriskField">*</span>{" "}
                  </label>
                  <div className="controls col-md-8 ">
                    <input
                      className="input-md textinput textInput form-control"
                      id="id_time"
                      name="tov"
                      placeholder="Enter your time"
                      value={tov}
                      onChange={handleChange}
                      style={{ marginBottom: "10px" }}
                      type="time"
                    />
                  </div>
                </div>
                <div id="div_id_password1" className="form-group required">
                  <label
                    htmlFor="id_password1"
                    className="control-label col-md-4  requiredField"
                  >
                    Latitude<span className="asteriskField">*</span>{" "}
                  </label>
                  <div className="controls col-md-8 ">
                    <input
                      className="input-md textinput textInput form-control"
                      id="id_latitude"
                      name="lat"
                      placeholder="Enter your latitude"
                      value={lat}
                      onChange={handleChange}
                      style={{ marginBottom: "10px" }}
                      type="text"
                    />
                  </div>
                </div>
                <div id="div_id_password2" className="form-group required">
                  <label
                    htmlFor="id_password2"
                    className="control-label col-md-4  requiredField"
                  >
                    Longitude<span className="asteriskField">*</span>{" "}
                  </label>
                  <div className="controls col-md-8 ">
                    <input
                      className="input-md textinput textInput form-control"
                      id="id_longitude"
                      name="long"
                      placeholder="Enter your longitude"
                      value={long}
                      onChange={handleChange}
                      style={{ marginBottom: "10px" }}
                      type="text"
                    />
                  </div>
                </div>
                <div id="div_id_name" className="form-group required">
                  <label
                    htmlFor="id_name"
                    className="control-label col-md-4  requiredField"
                  >
                    {" "}
                    Details<span className="asteriskField">*</span>{" "}
                  </label>
                  <div className="controls col-md-8 ">
                    <input
                      className="input-md textinput textInput form-control"
                      id="id_details"
                      name="detail"
                      placeholder="Enter your details"
                      value={detail}
                      onChange={handleChange}
                      style={{ marginBottom: "10px" }}
                      type="text"
                    />
                  </div>
                </div>

                <div id="div_id_company" className="form-group required">
                  <label
                    htmlFor="id_company"
                    className="control-label col-md-4  requiredField"
                  >
                    {" "}
                    Description<span className="asteriskField">*</span>{" "}
                  </label>
                  <div className="controls col-md-8 ">
                    <textarea
                      className="input-md textinput textInput form-control"
                      id="id_description"
                      name="desc"
                      placeholder="Enter your Description"
                      value={desc}
                      onChange={handleChange}
                      style={{ marginBottom: "10px" }}
                      type="text"
                      defaultValue={""}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <div className="controls col-md-offset-4 col-md-8 ">
                    <div id="div_id_terms" className="checkbox required">
                      <label htmlFor="id_terms" className=" requiredField">
                        <input
                          className="input-ms checkboxinput"
                          id="id_terms"
                          name="see"
                          value={see}
                          onClick={handleCheckbox}
                          style={{ marginBottom: "10px" }}
                          type="checkbox"
                        />
                        Must see
                      </label>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <div className="aab controls col-md-4 " />
                  <div className="controls col-md-8 ">
                    <input
                      type="submit"
                      name="Signup"
                      defaultValue="Save"
                      className="btn btn-primary btn btn-info"
                      id="submit-id-save"
                      onClick={onSave}
                    />
                    or{" "}
                    <input
                      type="button"
                      name="Signup"
                      defaultValue="Reset"
                      className="btn btn btn-primary"
                      id="button-id-reset"
                      onClick={handleReset}
                    />
                    or{" "}
                    <input
                      type="button"
                      name="Signup"
                      defaultValue="Report"
                      className="btn btn btn-primary btn btn-info"
                      id="button-id-report"
                      onClick={handleReport}
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {report === true &&
        data.map((i) => (
          <ul>
            <li>
              INSERT INTO table_name (Name, Category, Date of visit, Time of visit, Latitude, Longitude, Detail, Description, Must see) VALUES ({i.name}, {i.category}, {i.dov}, {i.tov},{" "}
              {i.lat}, {i.long}, {i.detail}, {i.desc}, {i.see});
            </li>
          </ul>
        ))}
    </div>
  );
}

export default App;
