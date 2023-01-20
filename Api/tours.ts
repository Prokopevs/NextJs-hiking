import axios from 'axios';
export const getTours = async () => {
    try {
        const response = await axios.get(
            "https://635eccd803d2d4d47af65e4d.mockapi.io/tours"
        )
        const data = response.data
        return {
            props: {
                data: data,
            },
        }
    } catch (error) {
        console.log(error)
    }
}