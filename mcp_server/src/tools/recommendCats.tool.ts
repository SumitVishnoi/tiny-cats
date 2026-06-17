import axios from "axios";

export const recommendCatsTool = async (
  kidsFriendly: boolean,
  apartmentFriendly: boolean
) => {
  const res = await axios.post("http://localhost:3000/api/cats/recommend", {
    kidsFriendly,
    apartmentFriendly,
  });

  return res.data;
};


export const getAllCatsTool = async() => {
  const result = await axios.get("http://localhost:3000/api/cats")

  return result.data
}
