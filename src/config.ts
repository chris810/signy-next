interface Config {
  env: string
  apiURL: string
}

enum Environment {
  dev = 'development',
  stage = 'staging',
  prod = 'production'
}

export const env: Environment = process.env.ENV as Environment ?? 'development' as Environment

const config: Config = getConfigValues(env)

function getConfigValues (env: Environment): Config {
  return {
    env,
    apiURL: process.env.API_URL ?? 'apiURL'
  }
}

export default config
