import gen3 from "../data/gen1.json";

export default function handler(req, res) {
    res.status(200).json(gen3);
}