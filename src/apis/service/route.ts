import axios from "axios"


const serviceRoute = {
    getAllRoute: async (page: number=0, limit: number=10, startStationId?: number, endStationId?: number): Promise<any>=> {
        const response = await axios.get(
            `${import.meta.env.VITE_API_URL}/route/`,{

                params: {
                    page, 
                    limit,
                    startStationId,
                    endStationId
                }
            }

        )
        return response.data
    }
}



export default serviceRoute