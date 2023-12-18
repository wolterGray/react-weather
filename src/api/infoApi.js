import axios from "axios";

export const getInfoApi = async (api) => {
  try {
    // Выполнение GET-запроса
    const response = await axios.get("https://ipinfo.io?token=93327fa4af0ca6");

    // Обработка данных
    const {data} = response;

    // Возвращение данных, если это необходимо
    return data.loc;
  } catch (error) {
    // Обработка ошибок
    console.error("Произошла ошибка при запросе к ipinfo.io:", error.message);
    return null;
  }
};
