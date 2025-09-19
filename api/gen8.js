import gen8 from "../data/gen8.json";

export default function handler(req, res) {
    res.status(200).json(gen8);
}