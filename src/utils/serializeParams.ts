export default (params: any) =>
  Object.entries(params)
    .map((entrie) => `${entrie[0]}=${entrie[1]}`)
    .join("&");
