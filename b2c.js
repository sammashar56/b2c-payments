import mpesa from "./index"

const { shortCode } = config.mpesa.shortCode
const testMSISDN = 254705181707
await mpesaApi.b2c(shortCode, testMSISDN, 100, URL + '/b2c/timeout', URL + '/b2c/success')


export default mpesa;