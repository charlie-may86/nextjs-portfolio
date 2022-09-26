import axios from "axios";

export default async function handler(req, res) {
  const options = {
    method: "GET",
    url: "https://api.sportsdata.io/v3/cfb/scores/json/Games/2022",
    headers: {
      "Ocp-Apim-Subscription-Key": "b78d05aaa3da480c8f022c79d284bb7d",
    },
  };

  const getSchedule = async () => {
    try {
      return await axios(options);
    } catch (error) {
      console.log(error);
    }
  };

  try {
    const schedule = await getSchedule();
    res.status(201).json(schedule.data);
  } catch (err) {
    res.status(400).json(err);
  }
}
