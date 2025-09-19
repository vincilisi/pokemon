import gen9 from "../data/gen9.json";

export default function handler(req, res) {
    res.status(200).json(gen9);
}   