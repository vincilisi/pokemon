import gen4 from "../data/gen4.json";

export default function handler(req, res) {
    res.status(200).json(gen4);
}