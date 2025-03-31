import axios from "axios";

export const getLists = async () => {
    try {
        const response = await axios.get("https://mock.apidog.com/m1/844414-824492-default/api/places", {
            headers: {
                Accept: "application/json",
            },
        });
        return(response.data.lists)
    } catch (error: any) {
        console.error("Erro ao buscar listas salvas");
    }
};