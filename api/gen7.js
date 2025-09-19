import gen7 from "../data/gen7.json";

export default function handler(req, res) {
    res.status(200).json(gen7);
}