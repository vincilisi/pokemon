import gen5 from "../data/gen5.json";

export default function handler(req, res) {
    res.status(200).json(gen5);
}