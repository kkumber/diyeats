interface ErrorValue {
    error: string | null
}

const ErrorPage = ({error}: ErrorValue) => {
  return (
    <div className="errorContainer">
        <p><b>Error: </b>
        {error}
        </p>
    </div>
  );
};

export default ErrorPage;