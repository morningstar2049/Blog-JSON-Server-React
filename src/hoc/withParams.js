import { useParams } from "react-router-dom";

export function withParams(Component) {
  return function WithParams(props) {
    const params = useParams();
    return <Component {...props} params={params} />;
  };
}
