import db from "../db";

export function findById(pick_id) {
  return db("picks").where("pick_id", pick_id).first();
}

export async function addPick(pick) {
  const [row] = await db("picks").insert(pick, "pick_id");
  return findById(row.pick_id);
}
