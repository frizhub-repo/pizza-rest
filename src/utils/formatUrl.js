import qs from "query-string";

export default function formatUrl(url, queryParam) {
  if (Object.keys(queryParam).length !== 0) {
    queryParam = qs.stringify(queryParam);
    return `${url}?${queryParam}`;
  }
  return url;
}
