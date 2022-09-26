import { addPick } from "../../../db/models/cfb-model";

export default async function handler(req, res) {
  try {
    const { username, winner, spread } = req.body;

    const addPickData = {
      username,
      winner,
      spread,
    };
    const newPick = await addPick(addPickData);
    res.status(201).json(newPick);
  } catch (err) {
    res.status(400).json(err);
  }
}
