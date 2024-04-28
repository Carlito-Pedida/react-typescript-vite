import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
const AlertProp = ({ children }: Props) => {
  return <div className="alert alert-primary">{children}</div>;
};

export default AlertProp;
