import {
  CREATE,
  DELETE,
  GET_LIST,
  GET_MANY_REFERENCE,
  GET_ONE,
  UPDATE,
} from "react-admin";

const convertHTTPResponseToREST = (response, type, resource, params) => {
  const { headers, json } = response;
  switch (type) {
    case GET_LIST:
    case GET_MANY_REFERENCE:
      if (!headers.has("content-range")) {
        throw new Error(
          "The Content-Range header is missing in the HTTP Response. The simple REST client expects responses for lists of resources to contain this header with the total number of results to build the pagination. If you are using CORS, did you declare Content-Range in the Access-Control-Expose-Headers header?"
        );
      }
      return {
        data: json.map((record) => ({ id: record._id, ...record })),
        total: parseInt(headers.get("content-range").split("/").pop(), 10),
      };
    case CREATE:
      return { data: { id: json._id, ...params.data } };
    default:
      return { data: { id: json._id, ...json } };
  }
};

export default convertHTTPResponseToREST;
