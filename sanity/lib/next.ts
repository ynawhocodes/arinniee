// 기본값: 6hour
const isDev = process.env.NODE_ENV === "development";
export const defaultOptions = { next: { revalidate: isDev ? 0 : 60 * 60 * 6 } };
