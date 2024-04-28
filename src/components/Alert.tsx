import AlertProp from "../props/AlertProp";

const Alert = () => {
  return (
    <div>
      <div className="m-3 alert alert-primary" role="alert">
        <AlertProp>
          Hello{" "}
          <h4>
            <span>World</span>
          </h4>
        </AlertProp>
      </div>
    </div>
  );
};

export default Alert;
