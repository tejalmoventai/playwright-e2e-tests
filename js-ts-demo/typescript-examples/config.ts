
interface EnvironmentConfig {
    baseUrl: string,
    timeout: number
}

const defaultConfig: EnvironmentConfig = {
    baseUrl: "test.example.com",
    timeout: 3000
}

export default defaultConfig