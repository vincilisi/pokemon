import gen6 from "../data/gen6.json";

export default function handler(req, res) {
    res.status(200).json(gen6);
}