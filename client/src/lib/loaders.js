import apiRequest from "./apiRequest";

export const singlePageLoader = async ({ request, params }) => {
  const res = await apiRequest.get("posts/" + params.id);
  return res.data;
};
