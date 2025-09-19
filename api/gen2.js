import gen2 from "../data/gen2.json";

export default function handler(req, res) {
    res.status(200).json(gen2);
}