import axios from 'axios';
export const getTours = async () => {
    try {
        const response = await axios.get(
            `https://635eccd803d2d4d47af65e4d.mockapi.io/tours`
        )
        const data = response.data.slice(0, 9)
        return {
            props: {
                data,
            },
        }
    } catch (error) {
        console.log(error)
    }
}