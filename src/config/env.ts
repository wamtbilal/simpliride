const getEnvVariable = (key: string, defaultValue?: string): string => {
  const value = process.env[key] || defaultValue;
  if (!value) {
    throw new Error(`Missing environment variable: ${key}`);
  }
  return value;
};

export const ENV = {
  API_URL: getEnvVariable("NEXT_PUBLIC_API_URL", "http://localhost:3000/api"),
  NODE_ENV: getEnvVariable("NODE_ENV", "development"),
  // Add more env variables as needed
} as const;

export default ENV;
