import React from "react";
import cl from "./searchInput.module.scss";
import Message from "../message/Message";
import {MyContext} from "../../myContext";
import {useForm} from "react-hook-form";

function SearchInput({getWeatherData}) {
  const {isRequest, setIsRequest} = React.useContext(MyContext);
  const [isError, setIsError] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");
  const [inputValue, setInputValue] = React.useState("");
  const [cityName, setCityName] = React.useState("");
  const inputRef = React.useRef(null);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleError = () => {
    setCityName(inputValue);
    const specialCharsPattern = /[!@#$%^&*()_+\-=\{\}\[\];:'",.<>\/?\\|`~]/;
    if (specialCharsPattern.test(inputValue)) {
      setIsError(true);
      setErrorMessage(`"${inputValue}" Invalid character entered!`);
      setInputValue("");
    } else if (/^\s+$/.test(inputValue)) {
      setIsError(true);
      setErrorMessage("Enter something other than spaces!");
      setInputValue("");
    } else if (!inputValue.trim()) {
      setIsError(true);
      setErrorMessage("The field must not be empty!");
      setInputValue("");
    } else if (/\d/.test(inputValue)) {
      setIsError(true);
      setErrorMessage(
        `The name of the city, must not contain numbers! "1, 2, 3, 4, 5, 6, 7, 8, 9, 0"`
      );
      setInputValue("");
    } else {
      setIsError("");
      getWeatherData(inputValue);
      setInputValue("");
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleError();
    } else if (event.key) {
      setIsError(false);
      setIsRequest(false);
    }
  };
  React.useEffect(() => {
    // Устанавливаем фокус на инпуте при загрузке страницы
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <input
        ref={inputRef}
        onBlur={() => {
          setIsError(false);
          setIsRequest(false);
        }}
        aria-label="Enter city name"
        value={inputValue}
        onKeyDown={handleKeyPress}
        onChange={handleInputChange}
        placeholder={isError ? "Not correct Value" : "London"}
        type="text"
        className={`${cl.input} ${isError && cl.error}`}
      />

      {isRequest ? <Message>{`City not found!"`}</Message> : ""}
      {isError && <Message error={true}>{errorMessage}</Message>}
    </div>
  );
}

export default SearchInput;
