import AlertProp from "../props/AlertProp";
import "../App.css";

const Alert = () => {
  return (
    <div>
      <div className="m-3 alert-primary" role="alert">
        <AlertProp>
          <h4>
            Hello <span>World</span>
          </h4>
        </AlertProp>
      </div>
    </div>
  );
};

export default Alert;
